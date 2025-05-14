import FileDistribusi from "../models/file_distribusi.model.js";
import User from "../models/user.model.js";
import { Op } from "sequelize";

export const fileDistribusiPage = async (req, res) => {
  const title = "Upload File Distribusi";
  const user = req.session.user || {};
  const message = req.flash("uploadInfo");

  console.log("Session User:", req.session.user);

  try {
    let allFiles = [];

    const koordinatorList = await User.findAll({
      where: { role: "koordinator wali" },
      attributes: ["id_user", "nama_lengkap"],
    });

    // 🔻 Tambahkan di sini
    let koordinatorIdTarget = null;
    if (user.role === "wali pemasyarakatan") {
      const currentUser = await User.findByPk(user.id_user, {
        attributes: ["id_user", "koordinatorId"],
      });
      console.log("Current user from DB:", currentUser);

      koordinatorIdTarget = currentUser?.koordinatorId || null;
    }

    if (user.role === "wali pemasyarakatan") {
      // Hanya file yang dia upload sendiri
      allFiles = await FileDistribusi.findAll({
        where: { userId: user.id_user },
        include: [
          { model: User, as: "pengirim", attributes: ["nama_lengkap"] },
          { model: User, as: "penerima", attributes: ["nama_lengkap"] },
        ],
        order: [["createdAt", "DESC"]],
      });
    } else if (user.role === "koordinator wali") {
      // File dari wali yang dibawahinya (koordinatorId === id_user)
      allFiles = await FileDistribusi.findAll({
        where: { koordinatorId: user.id_user },
        include: [
          { model: User, as: "pengirim", attributes: ["nama_lengkap"] },
          { model: User, as: "penerima", attributes: ["nama_lengkap"] },
        ],
        order: [["createdAt", "DESC"]],
      });
    } else if (user.role === "kepala lapas") {
      // File yang ditujukan langsung ke kepala lapas
      allFiles = await FileDistribusi.findAll({
        where: { ditujukan_ke: "kepala lapas" },
        include: [
          { model: User, as: "pengirim", attributes: ["nama_lengkap"] },
          { model: User, as: "penerima", attributes: ["nama_lengkap"] },
        ],
        order: [["createdAt", "DESC"]],
      });
    } else {
      // Admin: semua file
      allFiles = await FileDistribusi.findAll({
        include: [
          { model: User, as: "pengirim", attributes: ["nama_lengkap"] },
          { model: User, as: "penerima", attributes: ["nama_lengkap"] },
        ],
        order: [["createdAt", "DESC"]],
      });
    }

    console.log("User role:", user.role);
    console.log("Resolved koordinatorIdTarget:", koordinatorIdTarget);

    // 🔻 Tambahkan `koordinatorIdTarget` ke render
    res.render("data_fileDistribusi", {
      title,
      user,
      message,
      allFiles,
      roles: ["koordinator wali", "kepala lapas"],
      koordinatorList,
      koordinatorIdTarget, // ✅ kirim ke tampilan
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const uploadFileDistribusi = async (req, res) => {
  try {
    const {
      judul_file,
      ditujukan_ke: raw_ditujukan_ke,
      ditujukan_ke_id,
      koordinatorId,
    } = req.body;

    const ditujukan_ke = Array.isArray(raw_ditujukan_ke)
      ? raw_ditujukan_ke[0]
      : raw_ditujukan_ke;

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
