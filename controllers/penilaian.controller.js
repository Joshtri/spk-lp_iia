import Kriteria from "../models/kriteria.model.js";
import Narapidana from "../models/narapidana.model.js";
import Penilaian from "../models/penilaian.model.js";
import Periode from "../models/periode.model.js";
import Sub_Kriteria from "../models/subKriteria.model.js";

// export const penilaianPage = async (req, res) => {
//     const title = "Data Penilaian";
//     const userData = req.session.user;
//     const currentPage = parseInt(req.query.page) || 1;
//     const itemsPerPage = 10; // You can adjust this value as needed

//     try {
//         // const { kriteriaData, totalItems } = await kriteriaService.getKriteria(currentPage, itemsPerPage);
//         // const totalPages = Math.ceil(totalItems / itemsPerPage);

//         const messagePost = req.flash("tambahInfo");
//         const messageUpdate = req.flash("updateInfo");
//         const messageDelete = req.flash("deleteInfo");

//         res.render('data_penilaian', {
//             title,
//             // kriteriaData,
//             messagePost,
//             messageUpdate,
//             messageDelete,
//             user: userData,
//             // currentPage,
//             // totalPages,
//             // itemsPerPage // Pass itemsPerPage to the template
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Server Error");
//     }
// };

// Controller to fetch data
export const penilaianPage = async (req, res) => {
  try {
    const title = "Data Penilaian";
    const messagePost = req.flash("tambahInfo");
    const messageUpdate = req.flash("updateInfo");
    const messageDelete = req.flash("deleteInfo");
    const userData = req.session.user;

    const periodeData = await Periode.findAll();
    const kriteriaData = await Kriteria.findAll({
      attributes: ["id_kriteria", "nama_kriteria"],
    });

    const selectedPeriodeId = req.query.periodeId || "all";

    const narapidanaInclude = {
      model: Penilaian,
      include: [Kriteria, { model: Periode }],
      required: false, // Ini WAJIB supaya semua narapidana tetap tampil meskipun belum ada Penilaian
    };

    if (selectedPeriodeId !== "all") {
      narapidanaInclude.where = { periodeId: selectedPeriodeId };
    }

    const penilaianData = await Narapidana.findAll({
      include: [narapidanaInclude],
    });

    const matrixData = penilaianData.map((narapidana) => {
      return {
        narapidana,
        periode:
          narapidana.Penilaians.length > 0
            ? narapidana.Penilaians[0].Periode
            : null,
        kriteria_nilai: kriteriaData.map((kriteria) => {
          const nilaiKriteria = narapidana.Penilaians.find(
            (penilaian) => penilaian.kriteriaId === kriteria.id_kriteria
          );
          return nilaiKriteria ? nilaiKriteria.nilai_kriteria : "-";
        }),
      };
    });

    res.render("data_penilaian", {
      penilaianData: matrixData,
      kriteriaData,
      periodeData,
      selectedPeriodeId,
      title,
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

export const addPenilaianPage = async (req, res) => {
  const userData = req.session.user;

  try {
    const title = "Tambah Penilaian";
    const kriteriaData = await Kriteria.findAll();
    const narapidanaData = await Narapidana.findAll();
    const periodeData = await Periode.findAll();
    const subKriteriaData = await Sub_Kriteria.findAll();

    const existingPenilaian = await Penilaian.findAll({
      attributes: ["narapidanaId", "periodeId"],
    });

    const penilaianMap = existingPenilaian.map((p) => ({
      narapidanaId: p.narapidanaId,
      periodeId: p.periodeId,
    }));

    const selectedPeriodeId = req.query.periodeId
      ? parseInt(req.query.periodeId)
      : null;

    const statusPenilaian = {};
    for (const { narapidanaId, periodeId } of penilaianMap) {
      if (!statusPenilaian[periodeId]) {
        statusPenilaian[periodeId] = new Set();
      }
      statusPenilaian[periodeId].add(narapidanaId);
    }

    // Convert Set to Array
    for (const key in statusPenilaian) {
      statusPenilaian[key] = Array.from(statusPenilaian[key]);
    }

    console.log("Selected Periode ID:", selectedPeriodeId);
    console.log("Penilaian Map:", JSON.stringify(penilaianMap, null, 2));

    res.render("add_penilaian", {
      title,
      user: userData,
      kriteriaData,
      narapidanaData,
      periodeData,
      statusPenilaian, // ← tambahan ini

      subKriteriaData,
      penilaianMap,
      selectedPeriodeId,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPenilaian = async (req, res) => {
  const { narapidanaId, kriteriaId, nilai_kriteria, subKriteriaId, periodeId } =
    req.body;

  try {
    // Validate input
    if (
      !narapidanaId ||
      !kriteriaId ||
      !nilai_kriteria ||
      !subKriteriaId ||
      !periodeId
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if Narapidana exists
    const narapidana = await Narapidana.findByPk(narapidanaId);
    if (!narapidana) {
      return res.status(404).json({ message: "Narapidana not found." });
    }

    // kriteriaId, nilai_kriteria, and subKriteriaId should be arrays
    if (
      !Array.isArray(kriteriaId) ||
      !Array.isArray(nilai_kriteria) ||
      !Array.isArray(subKriteriaId)
    ) {
      return res.status(400).json({
        message:
          "Kriteria, nilai_kriteria, and subKriteriaId should be arrays.",
      });
    }

    // Loop through each kriteria and insert the record
    for (let i = 0; i < kriteriaId.length; i++) {
      const kriteria = await Kriteria.findByPk(kriteriaId[i]);
      if (!kriteria) {
        return res
          .status(404)
          .json({ message: `Kriteria with id ${kriteriaId[i]} not found.` });
      }

      const subKriteria = await Sub_Kriteria.findByPk(subKriteriaId[i]);
      if (!subKriteria) {
        return res.status(404).json({
          message: `Sub Kriteria with id ${subKriteriaId[i]} not found.`,
        });
      }

      // Create Penilaian record for each kriteria
      await Penilaian.create({
        narapidanaId,
        kriteriaId: kriteriaId[i],
        subKriteriaId: subKriteriaId[i], // Assign subKriteriaId
        nilai_kriteria: nilai_kriteria[i],
        periodeId, // Assign periodeId
      });
    }

    // return res.status(201).json({ message: "Penilaian created successfully." });

    res.redirect("/data/penilaian");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const deletePenilaian = async (req, res) => {
  const { id } = req.params; // This should be `narapidanaId` now

  try {
    // Find and delete penilaian records where narapidanaId matches
    const deleted = await Penilaian.destroy({
      where: { narapidanaId: id },
    });

    if (deleted === 0) {
      return res
        .status(404)
        .json({ message: "Penilaian not found for the given narapidanaId." });
    }

    return res
      .status(200)
      .json({ message: "Penilaian records deleted successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// controllers/penilaian.controller.js

export const editPenilaianPage = async (req, res) => {
  const { id } = req.params;

  console.log("ID from params:", id); // Log the ID to check if it's being received correctly
  try {
    const title = "Edit Penilaian";
    const penilaian = await Penilaian.findByPk(id, {
      include: [
        {
          model: Narapidana,
          attributes: ["id_narapidana", "nama_narapidana"],
        },
        {
          model: Kriteria,
          attributes: ["id_kriteria", "nama_kriteria"],
        },
        {
          model: Sub_Kriteria,
          attributes: ["id_sub_kriteria", "nama_sub_kriteria"],
        },
        {
          model: Periode,
          attributes: ["id_periode", "periode_penilaian", "tahun_periode"],
        },
      ],
    });

    if (!penilaian) return res.status(404).send("Penilaian not found");

    const kriteriaData = await Kriteria.findAll();
    const narapidanaData = await Narapidana.findAll();
    const periodeData = await Periode.findAll();
    const subKriteriaData = await Sub_Kriteria.findAll();

    res.json(penilaian);

    res.render("edit_penilaian", {
      title,
      penilaian,
      kriteriaData,
      narapidanaData,
      periodeData,
      subKriteriaData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updatePenilaian = async (req, res) => {
  const {
    id_penilaian,
    narapidanaId,
    kriteriaId,
    nilai_kriteria,
    subKriteriaId,
    periodeId,
  } = req.body;

  try {
    // Validate input
    if (
      !id_penilaian ||
      !narapidanaId ||
      !kriteriaId ||
      !nilai_kriteria ||
      !subKriteriaId ||
      !periodeId
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if Penilaian exists
    const penilaian = await Penilaian.findByPk(id_penilaian);
    if (!penilaian) {
      return res.status(404).json({ message: "Penilaian not found." });
    }

    // Check if Kriteria, Sub-Kriteria, and Narapidana exist
    const kriteria = await Kriteria.findByPk(kriteriaId);
    const subKriteria = await Sub_Kriteria.findByPk(subKriteriaId);

    if (!kriteria || !subKriteria) {
      return res
        .status(404)
        .json({ message: "Kriteria or Sub-Kriteria not found." });
    }

    // Update Penilaian record
    await Penilaian.update(
      {
        narapidanaId,
        kriteriaId,
        subKriteriaId,
        nilai_kriteria,
        periodeId,
      },
      {
        where: { id_penilaian },
      }
    );

    return res.status(200).json({ message: "Penilaian updated successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const destroyAllPenilaian = async (req, res) => {
  try {
    // Delete all records in the Penilaian table
    await Penilaian.destroy({ where: {} });
    req.flash("success", "All penilaian data has been successfully deleted.");
    res.redirect("/data/penilaian");
  } catch (error) {
    console.error("Error deleting all penilaian data:", error);
    req.flash("error", "Failed to delete all penilaian data.");
    res.redirect("/data/penilaian");
  }
};

export const penilaianByNarapidana = async (req, res) => {
  const { narapidanaId } = req.params;
  try {
    const title = "Data Penilaian Narapidana";
    const userData = req.session.user;

    const penilaianList = await Penilaian.findAll({
      where: { narapidanaId },
      include: [
        {
          model: Narapidana,
          attributes: ["id_narapidana", "nama_narapidana"],
        },
        {
          model: Kriteria,
          attributes: ["id_kriteria", "nama_kriteria"],
        },
        {
          model: Sub_Kriteria,
          attributes: ["id_sub_kriteria", "nama_sub_kriteria"],
        },
        {
          model: Periode,
          attributes: ["id_periode", "periode_penilaian", "tahun_periode"],
        },
      ],
    });

    if (!penilaianList || penilaianList.length === 0) {
      return res.status(404).send("Tidak ada penilaian untuk narapidana ini.");
    }

    res.render("edit_penilaian", {
      title,
      penilaianList,
      user: userData,
      narapidana: penilaianList[0].Narapidana,
      subKriteriaData: await Sub_Kriteria.findAll(), // PASTIKAN INI DITAMBAH
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updatePenilaianBatch = async (req, res) => {
  const { id_penilaian, subKriteriaId, nilai_kriteria, narapidanaId } =
    req.body;

  try {
    for (let i = 0; i < id_penilaian.length; i++) {
      await Penilaian.update(
        {
          subKriteriaId: subKriteriaId[i],
          nilai_kriteria: nilai_kriteria[i],
        },
        {
          where: { id_penilaian: id_penilaian[i] },
        }
      );
    }

    res.redirect(`/data/penilaian`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Gagal mengupdate data penilaian.");
  }
};
