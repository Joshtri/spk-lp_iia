import Kriteria from "../models/kriteria.model.js";
import Narapidana from '../models/narapidana.model.js';
import Penilaian from "../models/penilaian.model.js";
import Periode from "../models/periode.model.js";
import Sub_Kriteria from '../models/subKriteria.model.js';


// Controller to fetch data
export const MainPerhitunganPage = async (req, res) => {
    try {
        const title = "Perhitungan TOPSIS"
        const messagePost = req.flash("tambahInfo");
        const messageUpdate = req.flash("updateInfo");
        const messageDelete = req.flash("deleteInfo");
        const userData = req.session.user;

        // Fetch all kriteria
        const kriteriaData = await Kriteria.findAll({
            attributes: ['id_kriteria', 'nama_kriteria', 'bobot_kriteria']
        });

        // Fetch penilaian data with related narapidana and criteria values
        const penilaianData = await Narapidana.findAll({
            include: [
                {
                    model: Penilaian,
                    include: [Kriteria]
                }
            ]
        });

        // Prepare the matrix for each narapidana
        const matrixData = penilaianData.map((narapidana) => {
            return {
                narapidana,
                kriteria_nilai: kriteriaData.map((kriteria) => {
                    const nilaiKriteria = narapidana.Penilaians.find(
                        (penilaian) => penilaian.kriteriaId === kriteria.id_kriteria
                    );
                    return nilaiKriteria ? nilaiKriteria.nilai_kriteria : "-"; // "-" if no value
                })
            };
        });

        res.render("mainTopsis", {
            penilaianData: matrixData,
            kriteriaData: kriteriaData,
            title,
            // kriteriaData,
            messagePost,
            messageUpdate,
            messageDelete,
            user: userData,
        });
    } catch (error) {
        console.error("Error fetching data: ", error);
        res.status(500).send("Internal Server Error");
    }
};


// Controller untuk mengambil dan menampilkan matriks normalisasi
// Fungsi untuk normalisasi matriks
// Fungsi untuk normalisasi matriks
// const normalizeMatrix = (decisionMatrix) => {
//     const numberOfCriteria = decisionMatrix[0].kriteria_nilai.length;
//     const divisors = Array(numberOfCriteria).fill(0);

//     // Hitung pembagi untuk setiap kriteria
//     decisionMatrix.forEach(row => {
//         row.kriteria_nilai.forEach((val, index) => {
//             divisors[index] += Math.pow(val, 2);
//         });
//     });

//     const sqrtDivisors = divisors.map(sum => Math.sqrt(sum));

//     // Normalisasi setiap nilai kriteria
//     return decisionMatrix.map(row => {
//         return {
//             nama: row.nama,
//             normalized: row.kriteria_nilai.map((val, index) => (val / sqrtDivisors[index]).toFixed(6))
//         };
//     });
// };

// Controller untuk mengambil dan menampilkan matriks normalisasi
// Controller untuk mengambil dan menampilkan matriks normalisasi


const normalizeMatrix = (decisionMatrix) => {
    const numberOfCriteria = decisionMatrix[0].kriteria_nilai.length;
    const divisors = Array(numberOfCriteria).fill(0);

    decisionMatrix.forEach(row => {
        row.kriteria_nilai.forEach((val, index) => {
            divisors[index] += Math.pow(parseFloat(val) || 0, 2);
        });
    });

    const sqrtDivisors = divisors.map(sum => Math.sqrt(sum));

    return decisionMatrix.map(row => {
        return {
            nama: row.nama,
            normalized: row.kriteria_nilai.map((val, index) => {
                const normalizedValue = (parseFloat(val) || 0) / sqrtDivisors[index];
                return isNaN(normalizedValue) ? 0 : normalizedValue; // Pastikan tidak NaN
            })
        };
    });
};

const calculateIdealSolutions = (weightedNormalizedMatrix, kriteriaData) => {
    const numberOfCriteria = weightedNormalizedMatrix[0].weighted_kriteria.length;

    // Inisialisasi solusi ideal positif dan negatif
    const idealPositive = Array(numberOfCriteria).fill(-Infinity);
    const idealNegative = Array(numberOfCriteria).fill(Infinity);

    // Temukan solusi ideal positif dan negatif
    weightedNormalizedMatrix.forEach(row => {
        row.weighted_kriteria.forEach((val, index) => {
            const kriteriaType = kriteriaData[index].jenis_kriteria;

            if (kriteriaType === 'benefit') {
                if (val > idealPositive[index]) {
                    idealPositive[index] = val;
                }
                if (val < idealNegative[index]) {
                    idealNegative[index] = val;
                }
            } else if (kriteriaType === 'cost') {
                if (val < idealPositive[index]) {
                    idealPositive[index] = val;
                }
                if (val > idealNegative[index]) {
                    idealNegative[index] = val;
                }
            }
        });
    });

    // Handle cases where ideal solutions are still -Infinity or Infinity
    idealPositive.forEach((val, index) => {
        if (val === -Infinity) idealPositive[index] = 0; // Adjust if no valid max found
    });

    idealNegative.forEach((val, index) => {
        if (val === Infinity) idealNegative[index] = 0; // Adjust if no valid min found
    });

    return { idealPositive, idealNegative };
};


// Fungsi untuk menghitung skor preferensi (V)
const calculatePreferences = (distances) => {
    const preferences = distances.map((item) => {
        const { distanceToPositive, distanceToNegative } = item;
        const totalDistance = distanceToPositive + distanceToNegative;

        return {
            nama: item.nama,
            preferenceScore: totalDistance === 0 ? 0 : distanceToNegative / totalDistance
        };
    });

    // Urutkan berdasarkan skor preferensi dari yang tertinggi ke terendah
    preferences.sort((a, b) => b.preferenceScore - a.preferenceScore);

    return preferences;
};



// Controller untuk mengambil dan menampilkan Matriks Normalisasi dan Matriks Ternormalisasi Terbobot
// Controller untuk mengambil dan menampilkan Matriks Normalisasi dan Matriks Ternormalisasi Terbobot
// Controller untuk mengambil dan menampilkan Matriks Normalisasi, Matriks Ternormalisasi Terbobot, Solusi Ideal, dan Preferensi
export const normalizedMatrixPage = async (req, res) => {
    try {
        const title = "Normalized Matrix (R), Weighted Normalized Matrix (V), Ideal Solutions, Distances, and Preferences";
        const userData = req.session.user;

        // Ambil data penilaian dengan data narapidana
        const penilaianData = await Penilaian.findAll({
            include: [{
                model: Narapidana,
                attributes: ['nama_narapidana'],
            }]
        });

        // Ambil semua data kriteria
        const kriteriaData = await Kriteria.findAll();

        // Buat objek untuk menyimpan nilai berdasarkan narapidana
        const decisionMatrix = {};

        penilaianData.forEach((penilaian) => {
            const nama = penilaian.Narapidana.nama_narapidana;

            // Jika nama narapidana belum ada dalam decisionMatrix, inisialisasi
            if (!decisionMatrix[nama]) {
                decisionMatrix[nama] = {
                    nama,
                    kriteria_nilai: Array(kriteriaData.length).fill(0) // Inisialisasi semua kriteria dengan nilai 0
                };
            }

            // Temukan indeks kriteria yang sesuai
            const kriteriaIndex = kriteriaData.findIndex(kriteria => kriteria.id_kriteria === penilaian.kriteriaId);

            if (kriteriaIndex !== -1) {
                // Masukkan nilai kriteria ke posisi yang sesuai
                decisionMatrix[nama].kriteria_nilai[kriteriaIndex] = parseFloat(penilaian.nilai_kriteria) || 0;
            }
        });

        // Ubah objek menjadi array untuk diolah lebih lanjut
        const decisionMatrixArray = Object.values(decisionMatrix);

        // Hitung matriks normalisasi (R)
        const normalizedMatrix = normalizeMatrix(decisionMatrixArray);

        // Hitung matriks normalisasi terbobot (V)
        const weightedNormalizedMatrix = normalizedMatrix.map((item) => {
            return {
                nama: item.nama,
                weighted_kriteria: item.normalized.map((nilai, index) => 
                    parseFloat(nilai) * parseFloat(kriteriaData[index].bobot_kriteria)
                )
            };
        });

        // Hitung solusi ideal positif (MAX) dan negatif (MIN)
        const { idealPositive, idealNegative } = calculateIdealSolutions(weightedNormalizedMatrix, kriteriaData);

        // Hitung jarak ke solusi ideal positif dan negatif
        const distances = weightedNormalizedMatrix.map((item) => {
            const distanceToPositive = Math.sqrt(item.weighted_kriteria.reduce((sum, val, index) => {
                const kriteriaType = kriteriaData[index].jenis_kriteria;
                return sum + Math.pow(val - (kriteriaType === 'benefit' ? idealPositive[index] : idealNegative[index]), 2);
            }, 0));

            const distanceToNegative = Math.sqrt(item.weighted_kriteria.reduce((sum, val, index) => {
                const kriteriaType = kriteriaData[index].jenis_kriteria;
                return sum + Math.pow(val - (kriteriaType === 'cost' ? idealNegative[index] : idealPositive[index]), 2);
            }, 0));

            return {
                nama: item.nama,
                distanceToPositive,
                distanceToNegative
            };
        });

        // Hitung skor preferensi (V) dan urutkan
        const preferences = calculatePreferences(distances);

        // Siapkan data untuk rendering
        const matrixData = {
            normalized: normalizedMatrix,
            weighted: weightedNormalizedMatrix,
            distances: distances,
            idealPositive: idealPositive,
            idealNegative: idealNegative,
            preferences: preferences
        };

        console.log("Normalized Matrix:", normalizedMatrix);
        console.log("Weighted Normalized Matrix:", weightedNormalizedMatrix);
        console.log("Ideal Positive Solution:", idealPositive);
        console.log("Ideal Negative Solution:", idealNegative);
        console.log("Distances to Ideal Solutions:", distances);
        console.log("Preferences:", preferences);

        // Render halaman matriks normalisasi, matriks ternormalisasi terbobot, solusi ideal, dan preferensi
        res.render("normalizedMatrix", {
            kriteriaData,
            matrixData,
            title,
            user: userData,
        });

    } catch (error) {
        console.error('Error fetching normalized, weighted normalized matrix, ideal solutions, and preferences:', error);
        res.status(500).send("Internal Server Error");
    }
};

// Controller untuk mengambil dan menampilkan Matriks Ternormalisasi Terbobot
// Controller untuk mengambil dan menampilkan Matriks Ternormalisasi Terbobot
export const weightedNormalizedMatrixPage = async (req, res) => {
    try {
        const title = "Weighted Normalized Matrix (V)";
        const userData = req.session.user;

        // Mengambil data penilaian
        const penilaianData = await Penilaian.findAll({
            include: [{
                model: Narapidana,
                attributes: ['nama_narapidana'],
            }]
        });

        // Mengambil data kriteria
        const kriteriaData = await Kriteria.findAll();

        // Pastikan kriteriaData dan penilaianData ada
        if (!kriteriaData || !kriteriaData.length) {
            console.error("Kriteria data is empty or undefined");
            return res.status(500).send("Data kriteria tidak ditemukan");
        }
        
        if (!penilaianData || !penilaianData.length) {
            console.error("Penilaian data is empty or undefined");
            return res.status(500).send("Data penilaian tidak ditemukan");
        }
        
        // Membuat matriks normalisasi dari penilaianData
        const decisionMatrix = penilaianData.map((item) => {
            const nilaiKriteria = item.nilai_kriteria || {};
            return {
                nama: item.Narapidana.nama_narapidana,
                kriteria_nilai: kriteriaData.map((kriteria) => {
                    return nilaiKriteria[kriteria.id_kriteria] || 0;
                })
            };
        });

        // Normalisasi matriks (R)
        const normalizedMatrix = normalizeMatrix(decisionMatrix);

        // Matriks Ternormalisasi Terbobot (V)
        const weightedNormalizedMatrix = normalizedMatrix.map((item) => {
            return {
                nama: item.nama,
                weighted_kriteria: item.normalized.map((val, index) => {
                    const bobot = kriteriaData[index].bobot_kriteria;
                    const nilai = parseFloat(val) || 0; // Pastikan nilai adalah angka
                    return (nilai * bobot).toFixed(6);
                })
            };
        });
        

        // Render halaman matriks normalisasi terbobot
        res.render("weightedNormalizedMatrix", {
            kriteriaData,
            penilaianData: weightedNormalizedMatrix,
            title,
            user: userData,
        });

    } catch (error) {
        console.error('Error fetching weighted normalized matrix:', error);
        res.status(500).send("Internal Server Error");
    }
};
