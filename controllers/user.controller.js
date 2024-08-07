
import bcrypt from 'bcrypt'; // Import library bcryptjs untuk enkripsi password
import * as userService from '../services/user.services.js'


export const userPage = async(req,res)=>{
    const title = "Data User";
    try {
        res.render('data_user',{
            title
        });
    } catch (error) {
        throw error;
    }
};

export const updatePassword = async (req, res) => {
    try {
        const { id_user, newPassword } = req.body;

        // Enkripsi password baru sebelum disimpan
        const hashedPassword = await bcrypt.hash(newPassword, 10); // Gunakan salt sebesar 10

        // Panggil service untuk update password dengan password yang sudah dienkripsi
        const updatedUser = await userService.updatePassword(id_user, hashedPassword);

        // Setelah password berhasil diperbarui, lakukan logout dengan menghapus session
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                return res.status(500).json({ error: 'Failed to logout' });
            }
            // Redirect ke halaman utama atau halaman login setelah logout
            // Set pesan sukses menggunakan req.flash
            else{

                res.redirect('/');
            }
        });
    } catch (error) {
        // Tangani error
        console.error('Error in updatePassword:', error);
        res.status(500).json({ error: 'Failed to update password' });
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
                console.error('Error destroying session:', err);
                return res.status(500).json({ error: 'Failed to logout' });
            }
            // Redirect ke halaman utama atau halaman login setelah logout
            res.redirect('/');
        });
    } catch (error) {
        // Tangani error
        console.error('Error deleting account:', error);
        res.status(500).json({ error: 'Failed to delete account' });
    }
};