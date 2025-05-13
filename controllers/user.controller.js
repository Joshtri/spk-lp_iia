import bcrypt from "bcrypt"; // Import library bcryptjs untuk enkripsi password
import * as userService from "../services/user.services.js";
import User from "../models/user.model.js";

export const userPage = async (req, res) => {
  const title = "Data User";
  const successUpdateUserProfile = req.flash("successUpdateInfoProfile");
  const userData = req.session.user;

  const koordinatorList = await User.findAll({
    where: { role: "koordinator wali" },
  });

  try {
    // const adminData = await User.findAll(); // ambil semua data admin
    const adminData = await User.findAll({
      include: {
        model: User,
        as: "koordinator",
        attributes: ["id_user", "nama_lengkap"], // bisa tambahkan username juga kalau mau
      },
    });


    console.log('debugging adminData', adminData);
    res.render("data_user", {
      title,
      successUpdateUserProfile,
      user: userData,
      adminData,
      koordinatorList,
      messagePost: req.flash("messagePost"), // ⬅️ tambahkan ini!
      message: req.flash("changePassword"), // ✅ tambahkan ini jika ingin akses <%= message %> di EJS
    });
  } catch (error) {
    throw error;
  }
};

export const postUser = async (req, res) => {
  const { username, password, nama_lengkap, email, role, koordinatorId } =
    req.body;

  try {
    // Validasi sederhana
    if (
      !username ||
      !password ||
      !nama_lengkap ||
      !email ||
      !role ||
      role === "-"
    ) {
      req.flash(
        "messagePost",
        "Harap isi semua kolom dan pilih role dengan benar."
      );
      return res.redirect("/data/user");
    }

    // Enkripsi password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat user baru
    await User.create({
      username,
      password: hashedPassword,
      nama_lengkap,
      email,
      role,
      koordinatorId:
        role === "wali pemasyarakatan" ? koordinatorId || null : null,
    });

    req.flash("messagePost", "Data user berhasil ditambahkan.");
    res.redirect("/data/user");
  } catch (error) {
    console.error("Gagal menambahkan user:", error);
    req.flash("messagePost", "Terjadi kesalahan saat menambahkan data.");
    res.redirect("/data/user");
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { id_user, newPassword } = req.body;

    // Enkripsi password baru sebelum disimpan
    const hashedPassword = await bcrypt.hash(newPassword, 10); // Gunakan salt sebesar 10

    // Panggil service untuk update password dengan password yang sudah dienkripsi
    const updatedUser = await userService.updatePassword(
      id_user,
      hashedPassword
    );

    // Setelah password berhasil diperbarui, lakukan logout dengan menghapus session
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).json({ error: "Failed to logout" });
      }
      // Redirect ke halaman utama atau halaman login setelah logout
      // Set pesan sukses menggunakan req.flash
      else {
        res.redirect("/");
      }
    });
  } catch (error) {
    // Tangani error
    console.error("Error in updatePassword:", error);
    res.status(500).json({ error: "Failed to update password" });
  }
};

export const userDetailPage = async (req, res) => {
  const { id } = req.params;
  const title = "Detail User";

  try {
    const user = await User.findByPk(id);

    if (!user) {
      req.flash("messagePost", "User tidak ditemukan.");
      return res.redirect("/data/user");
    }

    res.render("detail_user", {
      title,
      user,
    });
  } catch (error) {
    console.error("Error fetching user detail:", error);
    req.flash("messagePost", "Gagal mengambil detail user.");
    res.redirect("/data/user");
  }
};

export const updateUser = async (req, res) => {
  const { id_user } = req.params;
  const { username, nama_lengkap, email } = req.body;

  try {
    const user = await User.findByPk(id_user);
    if (!user) {
      return res.redirect("/adm/profil_saya");
    }

    await user.update({ username, nama_lengkap, email });

    // Hapus session (logout) lalu redirect
    req.session.destroy((err) => {
      if (err) {
        console.error("Gagal destroy session:", err);
        return res.redirect("/adm/profil_saya");
      }

      // Simpan info lewat query param untuk alert di FE
      res.redirect("/?updated=success");
    });
  } catch (error) {
    console.error(error);
    res.redirect("/adm/profil_saya");
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const userId = req.session.user.id_user; // Atau sesuaikan dengan cara Anda mengidentifikasi pengguna

    // Panggil service untuk menghapus akun berdasarkan userId
    await userService.deleteUserById(userId);

    // Setelah berhasil menghapus akun, lakukan logout dengan menghapus session
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).json({ error: "Failed to logout" });
      }
      // Redirect ke halaman utama atau halaman login setelah logout
      res.redirect("/");
    });
  } catch (error) {
    // Tangani error
    console.error("Error deleting account:", error);
    res.status(500).json({ error: "Failed to delete account" });
  }
};

export const userEditPage = async (req, res) => {
  const { id } = req.params;
  const title = "Edit User";

  try {
    const userData = await User.findByPk(id);
    if (!userData) {
      req.flash("messagePost", "User tidak ditemukan.");
      return res.redirect("/data/user");
    }

    res.render("edit_user", {
      title,
      user: userData,
    });
  } catch (error) {
    console.error("Gagal membuka form edit:", error);
    req.flash("messagePost", "Terjadi kesalahan.");
    res.redirect("/data/user");
  }
};

export const userEditSubmit = async (req, res) => {
  const { id } = req.params;
  const { username, nama_lengkap, email, role } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      req.flash("messagePost", "User tidak ditemukan.");
      return res.redirect("/data/user");
    }

    await user.update({ username, nama_lengkap, email, role });
    req.flash("messagePost", "Data user berhasil diperbarui.");
    res.redirect("/data/user");
  } catch (error) {
    console.error("Gagal update user:", error);
    req.flash("messagePost", "Terjadi kesalahan saat update.");
    res.redirect("/data/user");
  }
};

// GET Page
export const passwordPage = async (req, res) => {
  const { id } = req.params; // id user yang mau diubah
  const title = "Ubah Password";
  const message = req.flash("changePassword");

  try {
    const user = await User.findByPk(id);
    if (!user) {
      req.flash("changePassword", "User tidak ditemukan.");
      return res.redirect("/data/user");
    }

    res.render("ubah_password", {
      title,
      user,
      message,
      showOldPassword: false, // ⬅️ admin tidak perlu input password lama
      formAction: `/data/edit_user/${user.id_user}/password`, // ⬅️ endpoint untuk update
      cancelLink: "/data/user", // ⬅️ tombol batal kembali ke daftar user
    });
  } catch (err) {
    console.error(err);
    req.flash("changePassword", "Terjadi kesalahan.");
    return res.redirect("/data/user");
  }
};

export const changePassword = async (req, res) => {
  const { id } = req.params; // Ambil ID user dari URL
  const { newPassword, confirmPassword } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      req.flash("changePassword", "User tidak ditemukan.");
      return res.redirect("/data/user");
    }

    if (newPassword !== confirmPassword) {
      req.flash("changePassword", "Konfirmasi password tidak cocok.");
      return res.redirect(`/data/edit_user/${id}/password`);
    }

    const isSameAsOld = await bcrypt.compare(newPassword, user.password);
    if (isSameAsOld) {
      req.flash(
        "changePassword",
        "Password baru tidak boleh sama dengan yang lama."
      );
      return res.redirect(`/data/edit_user/${id}/password`);
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    await user.update({ password: hashed });

    req.flash("changePassword", "Password berhasil diubah.");
    res.redirect("/data/user");
  } catch (err) {
    console.error("Gagal mengubah password:", err);
    req.flash("changePassword", "Terjadi kesalahan saat mengubah password.");
    res.redirect(`/data/edit_user/${id}/password`);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      req.flash("message", "User tidak ditemukan.");
      return res.redirect("/data/user");
    }

    await user.destroy();
    req.flash("message", `User "${user.username}" berhasil dihapus.`);
    res.redirect("/data/user");
  } catch (error) {
    console.error("Gagal menghapus user:", error);
    req.flash("message", "Terjadi kesalahan saat menghapus user.");
    res.redirect("/data/user");
  }
};

export const getWaliBawahanPage = async (req, res) => {
  const title = "Daftar Wali Pemasyarakatan";
  const userData = req.session.user;

  try {
    const waliList = await User.findAll({
      where: {
        role: "wali pemasyarakatan",
        koordinatorId: userData.id_user, // ambil berdasarkan koordinator yang login
      },
    });

    res.render("data_wali_bawahan", {
      title,
      user: userData,
      waliList,
      message: req.flash("message"),
    });
  } catch (error) {
    console.error("Gagal mengambil data wali bawahan:", error);
    req.flash("message", "Terjadi kesalahan.");
    res.redirect("/dashboard");
  }
};
