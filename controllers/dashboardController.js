
const db = require('../utils/database');


exports.dashboardPage = (req,res)=>{
    
    const locals = {
        title:"Dashboard pengguna"
    }
    // Dapatkan data admin dari session dan gunakan sesuai kebutuhan
    const adminData = req.session.admin;

    const messageLoginSuccess = req.flash('loginSuccessInfo');

    res.render('dashboard',
    { 
        admin: adminData,
        locals, 
        messageLoginSuccess
    });
}


exports.myProfilePage = (req,res)=>{
    
    // Dapatkan data admin dari session dan gunakan sesuai kebutuhan
    const adminData = req.session.admin;

    res.render('my_profile',{
        admin: adminData 
    })
}


exports.totalKriteriaJSON = (req, res) => {
    try {

        // Mengambil total buku dari database MySQL
        db.query('SELECT COUNT(*) AS total FROM kriteria', (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            const totalKriteria = results[0].total;


            res.json(totalKriteria);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.totalNarapidanaJSON = (req, res) => {
    try {

        // Mengambil total buku dari database MySQL
        db.query('SELECT COUNT(*) AS total FROM narapidana', (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            const totalNarapidana = results[0].total;


            res.json(totalNarapidana);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




exports.updatePasswordByUser = (req, res) => {
    const { id_admin, newPassword } = req.body;

    const queryUpdatePassword = `
        UPDATE admin 
        SET password = ? 
        WHERE id_admin = ?;
    `;

    db.query(queryUpdatePassword, [newPassword, id_admin], (err, results) => {
        if (err) {
            console.error("Error updating password:", err);
            res.status(500).json({ message: "Gagal mengubah password.", error: err });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: "Password berhasil diubah." });
            } else {
                res.status(404).json({ message: "Admin tidak ditemukan." });
            }
        }
    });
};

