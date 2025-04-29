import Hasil_Perhitungan from "../models/hasil_perhitungan.model.js";
import Kriteria from "../models/kriteria.model.js";
import Narapidana from "../models/narapidana.model.js";
import Penilaian from "../models/penilaian.model.js";
import Periode from "../models/periode.model.js";
import Sub_Kriteria from "../models/subKriteria.model.js";
import PDFDocument from "pdfkit";

// Controller to fetch data

export const hasilPerhitunganSuccessPage = async (req, res) => {
    const title = "Hasil Perhitungan Berhasil";
    const messagePost = req.flash("tambahInfo");
    const messageUpdate = req.flash("updateInfo");
    const messageDelete = req.flash("deleteInfo");
    const userData = req.session.user;


    res.render("hasil_perhitungan_success", {
        title,
        messagePost,
        messageUpdate,
        messageDelete,
        user: userData,
    });
};

export const MainPerhitunganPage = async (req, res) => {
  try {
    const title = "Perhitungan TOPSIS";
    const messagePost = req.flash("tambahInfo");
    const messageUpdate = req.flash("updateInfo");
    const messageDelete = req.flash("deleteInfo");
    const userData = req.session.user;

    // Fetch all kriteria
    const kriteriaData = await Kriteria.findAll({
      attributes: ["id_kriteria", "nama_kriteria", "bobot_kriteria"],
    });

    // Fetch penilaian data with related narapidana and criteria values
    const penilaianData = await Narapidana.findAll({
      include: [
        {
          model: Penilaian,
          include: [Kriteria],
        },
      ],
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
        }),
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

// const normalizeMatrix = (decisionMatrix) => {
//     const numberOfCriteria = decisionMatrix[0].kriteria_nilai.length;
//     const divisors = Array(numberOfCriteria).fill(0);

//     decisionMatrix.forEach(row => {
//         row.kriteria_nilai.forEach((val, index) => {
//             divisors[index] += Math.pow(parseFloat(val) || 0, 2);
//         });
//     });

//     const sqrtDivisors = divisors.map(sum => Math.sqrt(sum));

//     return decisionMatrix.map(row => {
//         return {
//             nama: row.nama,
//             normalized: row.kriteria_nilai.map((val, index) => {
//                 const normalizedValue = (parseFloat(val) || 0) / (sqrtDivisors[index] || 1); // Prevent division by zero
//                 return isNaN(normalizedValue) ? 0 : normalizedValue; // Ensure no NaN values
//             })
//         };
//     });
// };

// const calculateIdealSolutions = (weightedNormalizedMatrix, kriteriaData) => {
//     const numberOfCriteria = weightedNormalizedMatrix[0].weighted_kriteria.length;

//     // Inisialisasi solusi ideal positif dan negatif
//     const idealPositive = Array(numberOfCriteria).fill(-Infinity);
//     const idealNegative = Array(numberOfCriteria).fill(Infinity);

//     // Temukan solusi ideal positif dan negatif
//     weightedNormalizedMatrix.forEach(row => {
//         row.weighted_kriteria.forEach((val, index) => {
//             const kriteriaType = kriteriaData[index].jenis_kriteria;

//             console.log(`Processing kriteria ${index + 1}: Type = ${kriteriaType}, Value = ${val}`);
//             console.log(`Current Ideal Positive: ${idealPositive}`);
//             console.log(`Current Ideal Negative: ${idealNegative}`);

//             if (kriteriaType === 'benefit') {
//                 if (val > idealPositive[index]) {
//                     idealPositive[index] = val;
//                 }
//                 if (val < idealNegative[index]) {
//                     idealNegative[index] = val;
//                 }
//             } else if (kriteriaType === 'cost') {
//                 if (val < idealPositive[index]) {
//                     idealPositive[index] = val;
//                 }
//                 if (val > idealNegative[index]) {
//                     idealNegative[index] = val;
//                 }
//             }
//         });
//     });

//     // Handle cases where ideal solutions are still -Infinity or Infinity
//     idealPositive.forEach((val, index) => {
//         if (val === -Infinity) idealPositive[index] = 0; // Adjust if no valid max found
//     });

//     idealNegative.forEach((val, index) => {
//         if (val === Infinity) idealNegative[index] = 0; // Adjust if no valid min found
//     });

//     console.log(`Final Ideal Positive Solution: ${idealPositive}`);
//     console.log(`Final Ideal Negative Solution: ${idealNegative}`);

//     return { idealPositive, idealNegative };
// };

// const calculateIdealSolutions = (weightedNormalizedMatrix) => {
//     // Kriteria Data statis
//     const kriteriaData = [
//         { jenis_kriteria: 'benefit' }, // Pembinaan
//         { jenis_kriteria: 'cost' },    // Sikap
//         { jenis_kriteria: 'benefit' }, // Penilaian
//         { jenis_kriteria: 'cost' },    // Kelakuan
//         { jenis_kriteria: 'benefit' }, // Aturan
//         { jenis_kriteria: 'cost' }     // Narkoba
//     ];

//     const numberOfCriteria = weightedNormalizedMatrix[0].weighted_kriteria.length;

//     // Inisialisasi solusi ideal positif dan negatif menggunakan angka maksimum dan minimum
//     const idealPositive = Array(numberOfCriteria).fill(-Number.MAX_VALUE);
//     const idealNegative = Array(numberOfCriteria).fill(Number.MAX_VALUE);

//     // Temukan solusi ideal positif dan negatif
//     weightedNormalizedMatrix.forEach(row => {
//         row.weighted_kriteria.forEach((val, index) => {
//             const kriteriaType = kriteriaData[index].jenis_kriteria;

//             // Periksa apakah nilai val adalah angka valid
//             if (isNaN(val) || val === Infinity || val === -Infinity) {
//                 console.error(`Invalid value detected at kriteria ${index + 1}, skipping...`);
//                 return; // Skip processing for invalid values
//             }

//             // Tentukan solusi ideal berdasarkan tipe kriteria
//             if (kriteriaType === 'benefit') {
//                 if (val > idealPositive[index]) {
//                     idealPositive[index] = val;
//                 }
//                 if (val < idealNegative[index]) {
//                     idealNegative[index] = val;
//                 }
//             } else if (kriteriaType === 'cost') {
//                 if (val < idealPositive[index]) {
//                     idealPositive[index] = val;
//                 }
//                 if (val > idealNegative[index]) {
//                     idealNegative[index] = val;
//                 }
//             }
//         });
//     });

//     // Penanganan nilai default jika tidak ada perubahan dari nilai awal
//     idealPositive.forEach((val, index) => {
//         if (val === -Number.MAX_VALUE) {
//             console.warn(`Ideal Positive value for kriteria ${index + 1} remains at default. Setting to a safe default value.`);
//             idealPositive[index] = 1; // Set default value (adjust as necessary)
//         }
//     });

//     idealNegative.forEach((val, index) => {
//         if (val === Number.MAX_VALUE) {
//             console.warn(`Ideal Negative value for kriteria ${index + 1} remains at default. Setting to a safe default value.`);
//             idealNegative[index] = 1; // Set default value (adjust as necessary)
//         }
//     });

//     console.log(`Final Ideal Positive Solution: ${idealPositive}`);
//     console.log(`Final Ideal Negative Solution: ${idealNegative}`);

//     return { idealPositive, idealNegative };
// };

// // Contoh penggunaan
// const weightedNormalizedMatrix = [
//     { weighted_kriteria: [0.4, 0.5, 0.7, 0.6, 0.8, 0.9] },
//     { weighted_kriteria: [0.3, 0.6, 0.5, 0.4, 0.7, 0.6] },
//     { weighted_kriteria: [0.8, 0.7, 0.6, 0.5, 0.9, 0.4] }
// ];

// const result = calculateIdealSolutions(weightedNormalizedMatrix);
// console.log(result);

// const calculateDistances = (weightedData, idealBest, idealWorst) => {
//     return weightedData.map(row => {
//         let distanceToBest = 0;
//         let distanceToWorst = 0;

//         row.weighted_kriteria.forEach((val, index) => {
//             val = parseFloat(val);
//             distanceToBest += Math.pow(val - idealBest[index], 2);
//             distanceToWorst += Math.pow(val - idealWorst[index], 2);
//         });

//         return {
//             nama: row.nama,
//             distanceToBest: Math.sqrt(distanceToBest),
//             distanceToWorst: Math.sqrt(distanceToWorst)
//         };
//     });
// };

// const calculatePreferences = (distances) => {
//     const preferences = distances.map((item) => {
//         const { distanceToBest, distanceToWorst } = item;
//         const totalDistance = distanceToBest + distanceToWorst;

//         return {
//             nama: item.nama,
//             preferenceScore: totalDistance === 0 ? 0 : distanceToWorst / totalDistance
//         };
//     });

//     // Urutkan berdasarkan skor preferensi dari yang tertinggi ke terendah
//     preferences.sort((a, b) => b.preferenceScore - a.preferenceScore);

//     return preferences;
// };

// export const normalizedMatrixPage = async (req, res) => {
//     try {
//         const title = "Normalized Matrix (R), Weighted Normalized Matrix (V), Ideal Solutions, Distances, and Preferences";
//         const userData = req.session.user;

//         // Ambil data penilaian dengan data narapidana
//         const penilaianData = await Penilaian.findAll({
//             include: [{
//                 model: Narapidana,
//                 attributes: ['nama_narapidana'],
//             }]
//         });

//         const periodeData = await Periode.findAll();
//         const kriteriaData = await Kriteria.findAll();

//         const decisionMatrix = {};

//         penilaianData.forEach((penilaian) => {
//             const nama = penilaian.Narapidana ? penilaian.Narapidana.nama_narapidana : 'Unknown';

//             if (!decisionMatrix[nama]) {
//                 decisionMatrix[nama] = {
//                     nama,
//                     kriteria_nilai: Array(kriteriaData.length).fill(0)
//                 };
//             }

//             const kriteriaIndex = kriteriaData.findIndex(kriteria => kriteria.id_kriteria === penilaian.kriteriaId);

//             if (kriteriaIndex !== -1) {
//                 decisionMatrix[nama].kriteria_nilai[kriteriaIndex] = parseFloat(penilaian.nilai_kriteria) || 0;
//             }
//         });

//         const decisionMatrixArray = Object.values(decisionMatrix);

//         if (decisionMatrixArray.length === 0) {
//             decisionMatrixArray.push({
//                 nama: 'No Data',
//                 kriteria_nilai: Array(kriteriaData.length).fill(0)
//             });
//         }

//         // Matriks normalisasi (R)
//         const normalizedMatrix = normalizeMatrix(decisionMatrixArray);

//         // Matriks normalisasi terbobot (V)
//         const weightedNormalizedMatrix = normalizedMatrix.map((item) => {
//             return {
//                 nama: item.nama,
//                 weighted_kriteria: item.normalized.map((nilai, index) =>
//                     parseFloat(nilai) * parseFloat(kriteriaData[index]?.bobot_kriteria || 0)
//                 )
//             };
//         });

//         // Solusi ideal positif dan negatif
//         const { idealPositive, idealNegative } = calculateIdealSolutions(weightedNormalizedMatrix, kriteriaData);

//         // Jarak ke solusi ideal
//         const distances = calculateDistances(weightedNormalizedMatrix, idealPositive, idealNegative);

//         // Skor preferensi (V)
//         const preferences = calculatePreferences(distances);

//         const matrixData = {
//             normalized: normalizedMatrix,
//             weighted: weightedNormalizedMatrix,
//             distances: distances,
//             idealPositive: idealPositive,
//             idealNegative: idealNegative,
//             preferences: preferences
//         };

//         // Logging for debugging
//         console.log("Normalized Matrix:", normalizedMatrix);
//         console.log("Weighted Normalized Matrix:", weightedNormalizedMatrix);
//         console.log('Kriteria Data:', kriteriaData);
//         console.log("Ideal Positive Solution:", idealPositive);
//         console.log("Ideal Negative Solution:", idealNegative);
//         console.log("Distances to Ideal Solutions:", distances);
//         console.log("Preferences:", preferences);

//         // Render hasil
//         res.render("normalizedMatrix", {
//             kriteriaData,
//             matrixData,
//             title,
//             user: userData,
//             periodeData
//         });

//     } catch (error) {
//         console.error('Error fetching normalized, weighted normalized matrix, ideal solutions, and preferences:', error);
//         res.status(500).send("Internal Server Error");
//     }
// };

// export const normalizedMatrixPage = async (req, res) => {
//     try {
//         const title = "Normalized Matrix (R), Weighted Normalized Matrix (V), Ideal Solutions, Distances, and Preferences";
//         const userData = req.session.user;

//         // Ambil periodeId dari query string
//         const { periodeId } = req.query;

//         // Ambil semua data periode
//         const periodeData = await Periode.findAll();
//         const kriteriaData = await Kriteria.findAll();

//         // Ambil data penilaian dengan data narapidana berdasarkan periodeId (jika ada)
//         const whereCondition = periodeId ? { periodeId: periodeId } : {}; // Jika periodeId ada, tambahkan kondisi where
//         const penilaianData = await Penilaian.findAll({
//             where: whereCondition, // filter berdasarkan periodeId jika dipilih
//             include: [{
//                 model: Narapidana,
//                 attributes: ['nama_narapidana'],
//             }]
//         });

//         const decisionMatrix = {};

//         penilaianData.forEach((penilaian) => {
//             const nama = penilaian.Narapidana ? penilaian.Narapidana.nama_narapidana : 'Unknown';

//             if (!decisionMatrix[nama]) {
//                 decisionMatrix[nama] = {
//                     nama,
//                     kriteria_nilai: Array(kriteriaData.length).fill(0)
//                 };
//             }

//             const kriteriaIndex = kriteriaData.findIndex(kriteria => kriteria.id_kriteria === penilaian.kriteriaId);

//             if (kriteriaIndex !== -1) {
//                 decisionMatrix[nama].kriteria_nilai[kriteriaIndex] = parseFloat(penilaian.nilai_kriteria) || 0;
//             }
//         });

//         const decisionMatrixArray = Object.values(decisionMatrix);

//         if (decisionMatrixArray.length === 0) {
//             decisionMatrixArray.push({
//                 nama: 'No Data',
//                 kriteria_nilai: Array(kriteriaData.length).fill(0)
//             });
//         }

//         // Matriks normalisasi (R)
//         const normalizedMatrix = normalizeMatrix(decisionMatrixArray);

//         // Matriks normalisasi terbobot (V)
//         const weightedNormalizedMatrix = normalizedMatrix.map((item) => {
//             return {
//                 nama: item.nama,
//                 weighted_kriteria: item.normalized.map((nilai, index) =>
//                     parseFloat(nilai) * parseFloat(kriteriaData[index]?.bobot_kriteria || 0)
//                 )
//             };
//         });

//         // Solusi ideal positif dan negatif
//         const { idealPositive, idealNegative } = calculateIdealSolutions(weightedNormalizedMatrix, kriteriaData);

//         // Jarak ke solusi ideal
//         const distances = calculateDistances(weightedNormalizedMatrix, idealPositive, idealNegative);

//         // Skor preferensi (V)
//         const preferences = calculatePreferences(distances);

//         const matrixData = {
//             normalized: normalizedMatrix,
//             weighted: weightedNormalizedMatrix,
//             distances: distances,
//             idealPositive: idealPositive,
//             idealNegative: idealNegative,
//             preferences: preferences
//         };

//         // Logging for debugging
//         console.log("Normalized Matrix:", normalizedMatrix);
//         console.log("Weighted Normalized Matrix:", weightedNormalizedMatrix);
//         console.log('Kriteria Data:', kriteriaData);
//         console.log("Ideal Positive Solution:", idealPositive);
//         console.log("Ideal Negative Solution:", idealNegative);
//         console.log("Distances to Ideal Solutions:", distances);
//         console.log("Preferences:", preferences);

//         // Render hasil
//         res.render("normalizedMatrix", {
//             kriteriaData,
//             matrixData,
//             title,
//             user: userData,
//             periodeData,
//             selectedPeriodeId: periodeId || '' // untuk menampilkan periode yang dipilih
//         });

//     } catch (error) {
//         console.error('Error fetching normalized, weighted normalized matrix, ideal solutions, and preferences:', error);
//         res.status(500).send("Internal Server Error");
//     }
// };

// Controller to handle form submission and save preference data
// export const saveHasilPerhitungan = async (req, res) => {
//   try {
//     const { preferences, periodeId } = req.body;

//     // Debugging preferences
//     console.log("Preferences:", preferences);

//     // Validasi apakah preferences berupa array
//     if (!Array.isArray(preferences)) {
//       return res.status(400).json({ message: "Preferences is not an array" });
//     }

//     // Validasi apakah periodeId valid
//     const periode = await Periode.findByPk(periodeId);
//     if (!periode) {
//       return res.status(400).json({ message: "Invalid Periode ID" });
//     }

//     // Loop melalui preferences dan simpan setiap hasil
//     for (const pref of preferences) {
//       const { nama, preferenceScore } = pref;

//       // Menentukan status_kelulusan berdasarkan threshold preferensi
//       const status_kelulusan =
//         parseFloat(preferenceScore) >= 0.5 ? "lulus" : "tidak lulus";

//       // Simpan hasil perhitungan ke dalam tabel Hasil_Perhitungan
//       await Hasil_Perhitungan.create({
//         nama_napi: nama, // Menyimpan nama narapidana
//         nilai_preferensi: preferenceScore, // Nilai preferensi
//         periodeId: periodeId, // ID periode terkait
//         status_kelulusan: status_kelulusan, // Status kelulusan (lulus atau tidak lulus)
//       });
//     }

//     // Kirim respon sukses
//     res.status(201).json({ message: "Hasil perhitungan successfully saved!" });
//   } catch (error) {
//     console.error("Error saving hasil perhitungan:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

export const saveHasilPerhitungan = async (req, res) => {
    try {
      const { preferences, periodeId } = req.body;
  
      if (!Array.isArray(preferences)) {
        return res.status(400).json({ message: "Preferences is not an array" });
      }
  
      const periode = await Periode.findByPk(periodeId);
      if (!periode) {
        return res.status(400).json({ message: "Invalid Periode ID" });
      }
  
      for (const pref of preferences) {
        const { nama, preferenceScore } = pref;
        const status_kelulusan = parseFloat(preferenceScore) >= 0.5 ? "lulus" : "tidak lulus";
  
        await Hasil_Perhitungan.create({
          nama_napi: nama,
          nilai_preferensi: preferenceScore,
          periodeId: periodeId,
          status_kelulusan: status_kelulusan,
        });
      }
  
      // ✅ Setelah selesai, redirect ke halaman sukses
      res.redirect('/adm/hasil_perhitungan_success'); 
      // Kamu buat route /adm/hasil_perhitungan_success untuk tampilan sukses
  
    } catch (error) {
      console.error("Error saving hasil perhitungan:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

//source code jadi.
export const hasilPerhitunganPage = async (req, res) => {
  const userData = req.session.user;
  const title = "Hasil Perhitungan";

  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const { count, rows: hasilPerhitunganData } =
      await Hasil_Perhitungan.findAndCountAll({
        include: [
          {
            model: Periode,
            attributes: ["tahun_periode", "periode_penilaian"],
          },
        ],
        limit,
        offset,
        order: [["id_hasil_perhitungan", "ASC"]],
      });

    const totalPages = Math.ceil(count / limit);

    res.render("data_hasilPerhitungan", {
      title,
      user: userData,
      hasilPerhitunganData,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    console.error("Error get hasil perhitungan:", error);
    throw error;
  }
};

/**
 * Ekspor data hasil perhitungan ke PDF berdasarkan periode
 */
export const exportPDFByPeriode = async (req, res) => {
  const { periode } = req.query;

  if (!periode) {
    return res.status(400).send("Periode harus diberikan.");
  }

  try {
    // Ambil data hasil perhitungan berdasarkan periode
    const hasilPerhitunganData = await Hasil_Perhitungan.findAll({
      where: {
        "$Periode.periode_penilaian$": periode,
      },
      include: [
        {
          model: Periode,
          attributes: ["tahun_periode", "periode_penilaian"],
        },
      ],
    });

    if (!hasilPerhitunganData || hasilPerhitunganData.length === 0) {
      return res.status(404).send("Data tidak ditemukan untuk periode ini.");
    }

    // Membuat dokumen PDF
    const doc = new PDFDocument({ margin: 30, size: "A4" });
    const fileName = `Hasil_Perhitungan_${periode}.pdf`;

    res.setHeader("Content-disposition", `attachment; filename="${fileName}"`);
    res.setHeader("Content-type", "application/pdf");

    doc.pipe(res);

    // Judul Dokumen
    doc
      .font("Helvetica-Bold")
      .fontSize(16)
      .text(`Data Hasil Perhitungan (${periode})`, { align: "center" });
    doc.moveDown();

    // Header Tabel
    const tableTop = 150; // Posisi vertikal awal tabel
    const columnWidths = [50, 150, 100, 100, 100]; // Lebar setiap kolom

    doc.font("Helvetica-Bold").fontSize(10);
    doc.text("No", 50, tableTop);
    doc.text("Nama Narapidana", 100, tableTop);
    doc.text("Nilai Preferensi", 250, tableTop);
    doc.text("Periode", 350, tableTop);
    doc.text("Status Bebas", 450, tableTop);

    doc
      .moveTo(50, tableTop + 15)
      .lineTo(550, tableTop + 15)
      .stroke(); // Garis pembatas header

    // Isi Tabel
    let y = tableTop + 20; // Baris pertama setelah header

    hasilPerhitunganData.forEach((data, index) => {
      const periodeText = `${data.Periode.tahun_periode} | ${data.Periode.periode_penilaian}`;
      doc.font("Helvetica").fontSize(10);

      // Menulis data dalam kolom
      doc.text(index + 1, 50, y); // Nomor
      doc.text(data.nama_napi, 100, y); // Nama Narapidana
      doc.text(data.nilai_preferensi, 250, y); // Nilai Preferensi
      doc.text(periodeText, 350, y); // Periode
      doc.text(data.status_kelulusan, 450, y); // Status Bebas

      // Garis horizontal antar baris
      doc
        .moveTo(50, y + 15)
        .lineTo(550, y + 15)
        .stroke();

      y += 20; // Pindah ke baris berikutnya
    });

    // Selesaikan Dokumen
    doc.end();
  } catch (error) {
    console.error("Error saat membuat PDF:", error);
    res.status(500).send("Terjadi kesalahan saat mengekspor PDF.");
  }
};

// Controller to delete hasil perhitungan by ID
export const deleteHasilPerhitungan = async (req, res) => {
  try {
    const id = req.params.id; // Get the ID from the request parameters
    // Find the record by ID
    const hasilPerhitungan = await Hasil_Perhitungan.findByPk(id);

    if (!hasilPerhitungan) {
      req.flash("error", "Data tidak ditemukan.");
      return res.redirect("/data/hasil_perhitungan"); // Redirect if the record is not found
    }

    // Delete the record
    await hasilPerhitungan.destroy();

    req.flash("success", "Data berhasil dihapus.");
    res.redirect("/adm/data/hasil_perhitungan"); // Redirect after deletion
  } catch (error) {
    console.error("Error deleting hasil perhitungan:", error);
    req.flash("error", "Terjadi kesalahan saat menghapus data.");
    res.status(500).redirect("/data/hasil_perhitungan");
  }
};

export const normalizedMatrixPage = async (req, res) => {
  try {
    const title =
      "Normalized Matrix (R), Weighted Normalized Matrix (V), Ideal Solutions, Distances, and Preferences";
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
      include: [
        {
          model: Narapidana,
          attributes: ["nama_narapidana"],
        },
      ],
    });

    // Buat matriks keputusan
    const decisionMatrix = {};
    penilaianData.forEach((penilaian) => {
      const nama = penilaian.Narapidana
        ? penilaian.Narapidana.nama_narapidana
        : "Unknown";

      if (!decisionMatrix[nama]) {
        decisionMatrix[nama] = {
          nama,
          kriteria_nilai: Array(kriteriaData.length).fill(0),
        };
      }

      const kriteriaIndex = kriteriaData.findIndex(
        (kriteria) => kriteria.id_kriteria === penilaian.kriteriaId
      );
      if (kriteriaIndex !== -1) {
        decisionMatrix[nama].kriteria_nilai[kriteriaIndex] =
          parseFloat(penilaian.nilai_kriteria) || 0;
      }
    });

    const decisionMatrixArray = Object.values(decisionMatrix);

    // Normalisasi Matriks (R)
    const normalizedMatrix = normalizeMatrix(decisionMatrixArray);

    // Matriks Normalisasi Terbobot (V)
    const weightedNormalizedMatrix = normalizedMatrix.map((item) => {
      return {
        nama: item.nama,
        weighted_kriteria: item.normalized.map(
          (nilai, index) =>
            parseFloat(nilai) *
            parseFloat(kriteriaData[index]?.bobot_kriteria || 0)
        ),
      };
    });

    // Solusi Ideal Positif dan Negatif
    const { idealPositive, idealNegative } = calculateIdealSolutions(
      weightedNormalizedMatrix,
      kriteriaData
    );

    // Jarak ke Solusi Ideal
    const distances = calculateDistances(
      weightedNormalizedMatrix,
      idealPositive,
      idealNegative
    );

    // Skor Preferensi
    const preferences = calculatePreferences(distances);

    const matrixData = {
      normalized: normalizedMatrix,
      weighted: weightedNormalizedMatrix,
      distances: distances,
      idealPositive: idealPositive,
      idealNegative: idealNegative,
      preferences: preferences,
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
      selectedPeriodeId: periodeId || "", // untuk menampilkan periode yang dipilih
    });
  } catch (error) {
    console.error("Error fetching normalized matrix and preferences:", error);
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
      ),
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
      distanceToNegative,
    };
  });
};

/**
 * Hitung Skor Preferensi
 */
const calculatePreferences = (distances) => {
  return distances
    .map((item) => {
      const preference =
        item.distanceToPositive + item.distanceToNegative === 0
          ? 0
          : item.distanceToNegative /
            (item.distanceToPositive + item.distanceToNegative);

      return {
        nama: item.nama,
        preference,
      };
    })
    .sort((a, b) => b.preference - a.preference); // Urutkan berdasarkan preferensi
};

// Controller untuk mengambil dan menampilkan Matriks Ternormalisasi Terbobot
// Controller untuk mengambil dan menampilkan Matriks Ternormalisasi Terbobot
// export const weightedNormalizedMatrixPage = async (req, res) => {
//     try {
//         const title = "Weighted Normalized Matrix (V)";
//         const userData = req.session.user;

//         // Mengambil data penilaian
//         const penilaianData = await Penilaian.findAll({
//             include: [{
//                 model: Narapidana,
//                 attributes: ['nama_narapidana'],
//             }]
//         });

//         // Mengambil data kriteria
//         const kriteriaData = await Kriteria.findAll();

//         // Pastikan kriteriaData dan penilaianData ada
//         if (!kriteriaData || !kriteriaData.length) {
//             console.error("Kriteria data is empty or undefined");
//             return res.status(500).send("Data kriteria tidak ditemukan");
//         }

//         if (!penilaianData || !penilaianData.length) {
//             console.error("Penilaian data is empty or undefined");
//             return res.status(500).send("Data penilaian tidak ditemukan");
//         }

//         // Membuat matriks normalisasi dari penilaianData
//         const decisionMatrix = penilaianData.map((item) => {
//             const nilaiKriteria = item.nilai_kriteria || {};
//             return {
//                 nama: item.Narapidana.nama_narapidana,
//                 kriteria_nilai: kriteriaData.map((kriteria) => {
//                     return nilaiKriteria[kriteria.id_kriteria] || 0;
//                 })
//             };
//         });

//         // Normalisasi matriks (R)
//         const normalizedMatrix = normalizeMatrix(decisionMatrix);

//         // Matriks Ternormalisasi Terbobot (V)
//         const weightedNormalizedMatrix = normalizedMatrix.map((item) => {
//             return {
//                 nama: item.nama,
//                 weighted_kriteria: item.normalized.map((val, index) => {
//                     const bobot = kriteriaData[index].bobot_kriteria;
//                     const nilai = parseFloat(val) || 0; // Pastikan nilai adalah angka
//                     return (nilai * bobot).toFixed(6);
//                 })
//             };
//         });

//         // Render halaman matriks normalisasi terbobot
//         res.render("weightedNormalizedMatrix", {
//             kriteriaData,
//             penilaianData: weightedNormalizedMatrix,
//             title,
//             user: userData,
//         });

//     } catch (error) {
//         console.error('Error fetching weighted normalized matrix:', error);
//         res.status(500).send("Internal Server Error");
//     }
// };
