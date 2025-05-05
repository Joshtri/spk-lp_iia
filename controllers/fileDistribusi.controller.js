import FileDistribusi from "../models/file_distribusi.model.js";
import User from "../models/user.model.js";


export const fileDistribusiPage = async (req, res) => {
  const title = "Upload File Distribusi";
  const user = req.session.user || {};
  const message = req.flash("uploadInfo");

  try {
    let allFiles = [];

    // Role-based filtering
    if (user.role === "koordinator wali") {
      allFiles = await FileDistribusi.findAll({
        where: { ditujukan_ke: "koordinator wali" },
        order: [["createdAt", "DESC"]],
      });
    } else if (user.role === "kepala lapas") {
      allFiles = await FileDistribusi.findAll({
        where: { ditujukan_ke: "kepala lapas" },
        order: [["createdAt", "DESC"]],
      });
    } else {
      // Admin bisa lihat semua
      allFiles = await FileDistribusi.findAll({
        order: [["createdAt", "DESC"]],
      });
    }

    const targetRoles =
      user.role === "koordinator wali"
        ? ["kepala lapas"]
        : ["koordinator wali", "kepala lapas"];

    res.render("data_fileDistribusi", {
      title,
      user,
      message,
      roles: targetRoles,
      allFiles,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const uploadFileDistribusi = async (req, res) => {
  try {
    const { judul_file, ditujukan_ke } = req.body;

    if (!req.files || !req.files.file) {
      return res.status(400).send("File tidak ditemukan");
    }

    const file = req.files.file;

    // Validasi ekstensi
    if (file.mimetype !== "application/pdf") {
      return res.status(400).send("File harus berupa PDF");
    }

    const base64File = file.data.toString("base64");

    await FileDistribusi.create({
      judul_file,
      ditujukan_ke,
      file: base64File,
    });

    req.flash("uploadInfo", "✅ File distribusi berhasil diunggah!");
    res.redirect("/data/sspn-spk");
  } catch (err) {
    console.error(err);
    res.status(500).send("Upload gagal");
  }
};
