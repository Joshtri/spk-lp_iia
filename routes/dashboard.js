const express = require('express');
const { dashboardPage, myProfilePage } = require('../controllers/dashboardController');
const {isLoggedIn} = require('../auth/protect');
const router = express.Router();
const protect = require('../auth/protect');



// Middleware untuk memeriksa apakah admin sudah login
const checkAdminLogin = (req, res, next) => {
    if (req.session.admin) {
        // Tampilkan data admin dari session di console
        console.log('Data admin:', req.session.admin);
        // Jika admin sudah login, lanjutkan ke middleware berikutnya atau ke endpoint yang diminta
        next();
    } else {
        // Jika admin belum login, redirect ke halaman login
        res.redirect('/');
        console.log('anda harus login terlebih dulu');
    }
};


router.get('/dashboard', protect, dashboardPage)

router.get('/profil_saya',protect,   myProfilePage);

// Router untuk logout
router.get('/logout', (req, res) => {
    // Hapus session admin
    req.session.destroy((err) => {
        if (err) {
            console.error('Error saat menghapus session:', err);
            res.redirect('/dashboard'); // Redirect ke halaman dashboard jika terjadi kesalahan
        } else {
            // Jika session berhasil dihapus, redirect ke halaman login
            res.redirect('/');
        }
    });
});



module.exports = router;