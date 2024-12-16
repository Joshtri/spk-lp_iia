import Hasil_Perhitungan from "../models/hasil_perhitungan.model.js";
import Kriteria from "../models/kriteria.model.js";
import Narapidana from '../models/narapidana.model.js';
import Penilaian from "../models/penilaian.model.js";
import Periode from "../models/periode.model.js";
import Sub_Kriteria from '../models/subKriteria.model.js';
import PDFDocument from 'pdfkit';



export const normalizedMatrixPage = async (req, res) => {
    try {
        const title = "Normalized Matrix (R), Weighted Normalized Matrix (V), Ideal Solutions, Distances, and Preferences";
        const userData = req.session.user;

        // Ambil periodeId dari query string
        const { periodeId } = req.query;

        // Ambil semua data periode dan kriteria
        const periodeData = await Periode.findAll();
        const kriteriaData = await Kriteria.findAll();

        // Ambil data penilaian dengan data narapidana berdasarkan periodeId (jika ada)
        const whereCondition = periodeId ? { periodeId: periodeId } : {}; // Jika periodeId ada, tambahkan kondisi where
        const penilaianData = await Penilaian.findAll({
            where: whereCondition,
            include: [{
                model: Narapidana,
                attributes: ['nama_narapidana'],
            }]
        });

        // Buat matriks keputusan
        const decisionMatrix = {};
        penilaianData.forEach((penilaian) => {
            const nama = penilaian.Narapidana ? penilaian.Narapidana.nama_narapidana : 'Unknown';

            if (!decisionMatrix[nama]) {
                decisionMatrix[nama] = {
                    nama,
                    kriteria_nilai: Array(kriteriaData.length).fill(0)
                };
            }

            const kriteriaIndex = kriteriaData.findIndex(kriteria => kriteria.id_kriteria === penilaian.kriteriaId);
            if (kriteriaIndex !== -1) {
                decisionMatrix[nama].kriteria_nilai[kriteriaIndex] = parseFloat(penilaian.nilai_kriteria) || 0;
            }
        });

        const decisionMatrixArray = Object.values(decisionMatrix);

        // Normalisasi Matriks (R)
        const normalizedMatrix = normalizeMatrix(decisionMatrixArray);

        // Matriks Normalisasi Terbobot (V)
        const weightedNormalizedMatrix = normalizedMatrix.map((item) => {
            return {
                nama: item.nama,
                weighted_kriteria: item.normalized.map((nilai, index) =>
                    parseFloat(nilai) * parseFloat(kriteriaData[index]?.bobot_kriteria || 0)
                )
            };
        });

        // Solusi Ideal Positif dan Negatif
        const { idealPositive, idealNegative } = calculateIdealSolutions(weightedNormalizedMatrix, kriteriaData);

        // Jarak ke Solusi Ideal
        const distances = calculateDistances(weightedNormalizedMatrix, idealPositive, idealNegative);

        // Skor Preferensi
        const preferences = calculatePreferences(distances);

        const matrixData = {
            normalized: normalizedMatrix,
            weighted: weightedNormalizedMatrix,
            distances: distances,
            idealPositive: idealPositive,
            idealNegative: idealNegative,
            preferences: preferences
        };

        console.log("DEBUG: Normalized Matrix:", normalizedMatrix);
        console.log("DEBUG: Weighted Normalized Matrix:", weightedNormalizedMatrix);
        console.log("DEBUG: Ideal Positive Solution:", idealPositive);
        console.log("DEBUG: Ideal Negative Solution:", idealNegative);
        console.log("DEBUG: Distances to Ideal Solutions:", distances);
        console.log("DEBUG: Preferences:", preferences);

        // Render hasil ke template
        res.render("normalizedMatrix", {
            kriteriaData,
            matrixData,
            title,
            user: userData,
            periodeData,
            selectedPeriodeId: periodeId || '' // untuk menampilkan periode yang dipilih
        });
    } catch (error) {
        console.error('Error fetching normalized matrix and preferences:', error);
        res.status(500).send("Internal Server Error");
    }
};

// Helper Functions

/**
 * Normalisasi Matriks
 */
const normalizeMatrix = (decisionMatrix) => {
    const criteriaCount = decisionMatrix[0]?.kriteria_nilai?.length || 0;
    const criteriaSums = Array(criteriaCount).fill(0);

    decisionMatrix.forEach((item) => {
        item.kriteria_nilai.forEach((value, index) => {
            criteriaSums[index] += Math.pow(value, 2);
        });
    });

    const normalizedMatrix = decisionMatrix.map((item) => {
        return {
            nama: item.nama,
            normalized: item.kriteria_nilai.map((value, index) =>
                criteriaSums[index] > 0 ? value / Math.sqrt(criteriaSums[index]) : 0
            )
        };
    });

    return normalizedMatrix;
};

/**
 * Hitung Solusi Ideal Positif dan Negatif
 */
const calculateIdealSolutions = (weightedMatrix, kriteriaData) => {
    const criteriaCount = kriteriaData.length;
    const idealPositive = Array(criteriaCount).fill(-Infinity);
    const idealNegative = Array(criteriaCount).fill(Infinity);

    weightedMatrix.forEach((item) => {
        item.weighted_kriteria.forEach((value, index) => {
            if (value > idealPositive[index]) idealPositive[index] = value;
            if (value < idealNegative[index]) idealNegative[index] = value;
        });
    });

    return { idealPositive, idealNegative };
};

/**
 * Hitung Jarak ke Solusi Ideal
 */
const calculateDistances = (weightedMatrix, idealPositive, idealNegative) => {
    return weightedMatrix.map((item) => {
        const distanceToPositive = Math.sqrt(
            item.weighted_kriteria.reduce((sum, value, index) => {
                return sum + Math.pow(value - idealPositive[index], 2);
            }, 0)
        );

        const distanceToNegative = Math.sqrt(
            item.weighted_kriteria.reduce((sum, value, index) => {
                return sum + Math.pow(value - idealNegative[index], 2);
            }, 0)
        );

        return {
            nama: item.nama,
            distanceToPositive,
            distanceToNegative
        };
    });
};

/**
 * Hitung Skor Preferensi
 */
const calculatePreferences = (distances) => {
    return distances.map((item) => {
        const preference = item.distanceToPositive + item.distanceToNegative === 0
            ? 0
            : item.distanceToNegative / (item.distanceToPositive + item.distanceToNegative);

        return {
            nama: item.nama,
            preference
        };
    }).sort((a, b) => b.preference - a.preference); // Urutkan berdasarkan preferensi
};
