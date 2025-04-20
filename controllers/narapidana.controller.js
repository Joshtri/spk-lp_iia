import Kriteria from "../models/kriteria.model.js";
import Narapidana from "../models/narapidana.model.js";
import Penilaian from "../models/penilaian.model.js";
import Periode from "../models/periode.model.js";
import Sub_Kriteria from "../models/subKriteria.model.js";
import * as narapidanaService from "../services/narapidana.services.js";
import * as pidanaService from "../services/pidana.services.js";

export const narapidanaPage = async (req, res) => {
  const title = "Data Narapidana";
  const currentPage = parseInt(req.query.page) || 1;
  const itemsPerPage = 10; // You can adjust this value as needed

  try {
    const { narapidanaData, totalItems } =
      await narapidanaService.getNarapidana(currentPage, itemsPerPage);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Dapatkan data user dari session dan gunakan sesuai kebutuhan
    const userData = req.session.user;

    const messagePost = req.flash("tambahInfo");
    const messageUpdate = req.flash("updateInfo");
    const messageDelete = req.flash("deleteInfo");

    res.render("data_narapidana", {
      narapidanaData,
      title,
      user: userData,
      messagePost,
      messageUpdate,
      messageDelete,
      currentPage,
      totalPages,
      itemsPerPage, // Pass itemsPerPage to the template
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const addNarapidanaPage = async (req, res) => {
  const title = "Tambah Narapidana";
  const userData = req.session.user;

  const tindakPidanaData = await pidanaService.getTindakPidana();
  try {
    res.render("add_narapidana", {
      title,
      user: userData,
      tindakPidanaData,
    });
  } catch (error) {
    throw error;
  }
};

export const createNarapidana = async (req, res) => {
  try {
    let narapidanaData = req.body;

    // Calculate age from tanggal_lahir
    const birthDate = new Date(narapidanaData.tanggal_lahir);
    let age = new Date().getFullYear() - birthDate.getFullYear();
    const monthDiff = new Date().getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && new Date().getDate() < birthDate.getDate())
    ) {
      age--;
    }

    // Add age to narapidanaData
    narapidanaData.umur = age;

    // Create new narapidana record
    const newNarapidana = await narapidanaService.createNarapidana(
      narapidanaData
    );

    // Flash success message and redirect
    await req.flash("tambahInfo", "Tambah data narapidana berhasil.");
    res.redirect("/data/narapidana");
  } catch (error) {
    throw error;
  }
};

export const deleteNarapidana = async (req, res) => {
  try {
    const id = req.params.id;
    const resultDelete = await narapidanaService.deleteNarapidana(id);

    if (resultDelete) {
      // res.status(200).json({ message: 'Kriteria deleted successfully' });
      await req.flash("deleteInfo", "Data Narapidana berhasil dihapus.");
      res.redirect("/data/narapidana");
    } else {
      await req.flash(
        "deleteInfo",
        "Data Narapidana tidak ditemukan dan gagal dihapus."
      );
      res.redirect("/data/narapidana");
    }
  } catch (error) {
    throw error;
  }
};

export const getDetailNarapidana = async (req, res) => {
  const title = "Detail Narapidana";
  const userData = req.session.user;

  try {
    const { id } = req.params;
    const narapidana = await narapidanaService.getNarapidanaById(id);

    if (!narapidana) {
      return res.status(404).json({ error: "Narapidana not found" });
    }

    const penilaianList = await Penilaian.findAll({
      where: { narapidanaId: id },
      include: [
        {
          model: Kriteria,
          attributes: ["id_kriteria", "nama_kriteria"],
        },
        {
          model: Sub_Kriteria,
          attributes: [
            "id_sub_kriteria",
            "nama_sub_kriteria",
            "bobot_sub_kriteria",
            "kriteriaId",
          ],
        },
        {
          model: Periode,
          attributes: ["id_periode", "periode_penilaian", "tahun_periode"],
        },
      ],
    });

    const subKriteriaData = await Sub_Kriteria.findAll();

    res.render("detail_narapidana", {
      title,
      user: userData,
      narapidana,
      penilaianList,
      subKriteriaData,
    });
  } catch (error) {
    console.error("Error in getDetailNarapidana:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getEditNarapidana = async (req, res) => {
  const title = "Edit Narapidana";
  const userData = req.session.user; // Dapatkan data user dari session

  const tindakPidanaData = await pidanaService.getTindakPidana(); // ambil semua data tindak pidana

  try {
    const { id } = req.params; // Ambil ID dari parameter request
    const narapidana = await narapidanaService.getNarapidanaById(id); // Panggil service untuk mendapatkan detail narapidana

    if (!narapidana) {
      return res.status(404).json({ error: "Narapidana not found" });
    }

    // Render view detail_narapidana dengan data narapidana dan user
    res.render("edit_narapidana", {
      title,
      user: userData,
      tindakPidanaData,
      narapidana,
    });
  } catch (error) {
    console.error("Error in getDetailNarapidana:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Handle form submission and update narapidana data
export const updateNarapidana = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      nama_narapidana,
      agama,
      tempat_lahir,
      tanggal_lahir,
      alamat_lengkap,
      no_ktp,
      pekerjaan_semula,
      pendidikan_terakhir,
      register,
      sisa_masa_tahanan,
    } = req.body;

    const [updated] = await Narapidana.update(
      {
        nama_narapidana,
        agama,
        tempat_lahir,
        tanggal_lahir,
        alamat_lengkap,
        no_ktp,
        pekerjaan_semula,
        pendidikan_terakhir,
        register,
        sisa_masa_tahanan,
      },
      {
        where: { id_narapidana: id },
      }
    );

    if (!updated) {
      return res.status(404).send("Narapidana not found");
    }

    res.redirect("/data/narapidana"); // Redirect to the list or detail page after update
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
