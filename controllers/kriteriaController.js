const db = require('../utils/database');


exports.kriteriaPage = (req, res) => {
    // Dapatkan data admin dari session dan gunakan sesuai kebutuhan
    const adminData = req.session.admin;

    const page = req.query.page || 1; // Default page is 1
    const limit = 5; // Number of items per page

    // Calculate offset based on page and limit
    const offset = (page - 1) * limit;

    const countQuery = 'SELECT COUNT(*) AS totalCount FROM kriteria';
    db.query(countQuery, (countErr, countResults) => {
        if (countErr) {
            throw countErr;
        }

        const totalCount = countResults[0].totalCount;
        const totalPages = Math.ceil(totalCount / limit);

        const readQuery = `SELECT * FROM kriteria LIMIT ?, ?`;
        db.query(readQuery, [offset, limit], (err, results) => {
            if (err) {
                throw err;
            } else {
                const messagePost = req.flash('tambahInfo');
                const messageDelete = req.flash('deleteInfo');
                const messageUpdate = req.flash('updateInfo');
                res.render('data_kriteria', {
                    admin: adminData,
                    kriteriaData: results,
                    messagePost,
                    messageDelete,
                    messageUpdate,
                    currentPage: parseInt(page), // Current page number
                    totalPages: totalPages, // Total number of pages
                    limit: limit // Number of items per page
                });
            }
        });
    });
};




exports.postKriteria = (req,res)=>{

    const kriteriaField = {
        nama_kriteria :req.body.nama_kriteria   
    }



    const insertQuery = "INSERT INTO kriteria SET ?"

    db.query(insertQuery,kriteriaField,(err, results)=>{

        if(err){
            console.log(err);
        }

        else{
            req.flash('tambahInfo', 'Data kriteria berhasil ditambah!');
            res.redirect('/data/data_kriteria')
            // console.log('tambah data berhasil.');
        }
    })

}



// Controller untuk menyimpan perubahan pada kriteria menggunakan metode PUT
exports.putEditKriteria = (req, res) => {
    // const  = req.params.id_kriteria;
    const { nama_kriteria, id_kriteria } = req.body;

    // Lakukan query SQL untuk update data kriteria
    const sql = 'UPDATE kriteria SET nama_kriteria = ? WHERE id_kriteria = ?';
    db.query(sql, [nama_kriteria, id_kriteria], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Terjadi kesalahan dalam menyimpan perubahan pada kriteria.');
            return;
        }

        console.log(result);
        req.flash('updateInfo', "Data kriteria berhasil di update !")
        res.redirect('/data/data_kriteria');
        // Jika update berhasil, kembalikan respon berhasil
        // res.status(200).send('Perubahan pada kriteria berhasil disimpan.');
    });
};


exports.addKriteriaPage = (req,res)=>{
    res.render('add_kriteria');
}


exports.deleteKritera = (req,res)=>{
    const id_kriteria = req.params.id_kriteria;

    const deleteQuery = 'DELETE FROM kriteria WHERE id_kriteria = ?';

    db.query(deleteQuery, [id_kriteria], (error, results) => {
        if (error) {
            console.error('Error deleting admin:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        else{
            // res.send('sukses hapus')
            req.flash('deleteInfo','Data kriteria berhasil dihapus!')
            res.redirect('/data/data_kriteria');
        }



        // res.status(204).end(); // No Content
    });
}
