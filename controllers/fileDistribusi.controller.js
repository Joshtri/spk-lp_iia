import FileDistribusi from "../models/file_distribusi.model.js";
import User from "../models/user.model.js";
import { Op } from "sequelize";

export const fileDistribusiPage = async (req, res) => {
  const title = "Upload File Distribusi";
  const user = req.session.user || {};
  const message = req.flash("uploadInfo");

  try {
    let allFiles = [];

    const koordinatorList = await User.findAll({
      where: { role: "koordinator wali" },
      attributes: ["id_user", "nama_lengkap"],
    });

    if (user.role === "koordinator wali") {
      allFiles = await FileDistribusi.findAll({
        where: {
          [Op.or]: [
            { ditujukan_ke_id: user.id_user },
            { koordinatorId: user.id_user }, // ✅ juga cocokkan dengan koordinatorId
          ],
        },
        include: [
          { model: User, as: "pengirim", attributes: ["nama_lengkap"] },
        ],
        order: [["createdAt", "DESC"]],
      });
    } else if (user.role === "kepala lapas") {
      // Ambil berdasarkan role lama
      allFiles = await FileDistribusi.findAll({
        where: { ditujukan_ke: "kepala lapas" },
        include: [
          { model: User, as: "pengirim", attributes: ["nama_lengkap"] },
          { model: User, as: "penerima", attributes: ["nama_lengkap"] },
        ],
        order: [["createdAt", "DESC"]],
      });
    } else {
      // Admin melihat semua file + relasi pengirim dan penerima
      allFiles = await FileDistribusi.findAll({
        include: [
          { model: User, as: "pengirim", attributes: ["nama_lengkap"] },
          { model: User, as: "penerima", attributes: ["nama_lengkap"] },
        ],
        order: [["createdAt", "DESC"]],
      });
    }

    res.render("data_fileDistribusi", {
      title,
      user,
      message,
      allFiles,
      roles: ["koordinator wali", "kepala lapas"], // untuk admin
      koordinatorList,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const uploadFileDistribusi = async (req, res) => {
  try {
    const { judul_file, ditujukan_ke, ditujukan_ke_id, koordinatorId } =
      req.body;
    const user = req.session.user;

    if (!user || !user.id_user) return res.status(403).send("Akses ditolak.");
    if (!req.files || !req.files.file)
      return res.status(400).send("File tidak ditemukan");

    const file = req.files.file;
    if (file.mimetype !== "application/pdf")
      return res.status(400).send("File harus berupa PDF");

    const base64File = file.data.toString("base64");

    await FileDistribusi.create({
      judul_file,
      file: base64File,
      ditujukan_ke,
      ditujukan_ke_id: parseInt(ditujukan_ke_id) || null,
      koordinatorId: parseInt(koordinatorId) || null, // ✅ Akan tersimpan sekarang
      userId: user.id_user,
    });

    req.flash("uploadInfo", "✅ File distribusi berhasil diunggah!");
    res.redirect("/data/sspn-spk");
  } catch (err) {
    console.error(err);
    res.status(500).send("Upload gagal");
  }
};
