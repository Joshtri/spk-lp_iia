import express from 'express';
import { dashboardPage, myProfilePage } from '../controllers/dashboard.controller.js';
import protect from '../config/auth/protect.js';
import { deleteAccount, updatePassword } from '../controllers/user.controller.js';
// const { dashboardPage, myProfilePage, totalKriteriaJSON, totalNarapidanaJSON } = require('../controllers/dashboardController');
// const {isLoggedIn} = require('../config/auth/protect');

const router = express.Router();
// import protect  from '../config/auth/protect';
// const { adminController } = require('../controllers/mergeController');



// Middleware untuk memeriksa apakah admin sudah login
// const checkAdminLogin = (req, res, next) => {
//     if (req.session.admin) {
//         // Tampilkan data admin dari session di console
//         console.log('Data admin:', req.session.admin);
//         // Jika admin sudah login, lanjutkan ke middleware berikutnya atau ke endpoint yang diminta
//         next();
//     } else {
//         // Jika admin belum login, redirect ke halaman login
//         res.redirect('/');
//         console.log('anda harus login terlebih dulu');
//     }
// };


router.get('/dashboard', protect,dashboardPage)

router.get('/profil_saya',protect, myProfilePage);
router.post('/update_pass',updatePassword);

// Route untuk menghapus akun
router.delete('/delete_account', deleteAccount);
// router.post('/update_pass',adminController.changePassword);
// router.get('/getTotalKriteria',totalKriteriaJSON);

// router.get('/getTotalNapi', totalNarapidanaJSON);

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


export default router;