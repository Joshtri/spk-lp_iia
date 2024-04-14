const db = require('../utils/database');



exports.narapidanaPage = (req, res) => {
    // Define pagination parameters
    const page = req.query.page || 1; // Default page is 1
    const limit = 8; // Number of items per page

    // Calculate offset based on page and limit
    const offset = (page - 1) * limit;
    const adminData = req.session.admin;
    // Fetch data from the database with pagination
    const queryRead = `
        SELECT 
            narapidana.id_narapidana, 
            narapidana.nama_narapidana,
            narapidana.no_ktp,
            narapidana.register,
            pekerjaan.nama_pekerjaan, 
            admin.id_admin AS id_wali,
            admin.nama_lengkap AS nama_wali
        FROM 
            narapidana
        JOIN 
            pekerjaan ON narapidana.pekerjaan_semula = pekerjaan.id_pekerjaan
        JOIN 
            admin ON narapidana.nama_wali = admin.id_admin
        LIMIT ?, ?
    `;

    db.query(queryRead, [offset, limit], (error, results, fields) => {
        if (error) {
            console.error('Error fetching data:', error);
            // Handle error, render an error page or send an error response
            return res.status(500).send('Internal Server Error');
        }

        // Count total number of items for pagination
        const totalCountQuery = 'SELECT COUNT(*) AS totalCount FROM narapidana';
        db.query(totalCountQuery, (error, countResults) => {
            if (error) {
                console.error('Error counting total data:', error);
                // Handle error, render an error page or send an error response
                return res.status(500).send('Internal Server Error');
            }

            // Calculate total number of pages
            const totalCount = countResults[0].totalCount;
            const totalPages = Math.ceil(totalCount / limit);
            const messagePost = req.flash('tambahInfo')
            const messageUpdate = req.flash('updateInfo');
            const messageDelete = req.flash('deleteInfo');

            // Data fetched successfully, render the view with the fetched data and pagination info
            const locals = {
                title: 'Data Narapidana',

            };

            res.render('data_narapidana',{
                locals,
                narapidanaData: results, // Pass fetched data to the view
                currentPage: parseInt(page), // Current page number
                totalPages: totalPages, // Total number of pages
                limit: limit, // Number of items per page
                admin: adminData,
                messagePost,
                messageDelete,
                messageUpdate
            }); // Sending locals object directly
        });
    });
}


exports.detailNarapidanaPage = (req, res) => {
    const idNarapidana = req.params.id_narapidana; // Ambil id_narapidana dari parameter URL
    const adminData = req.session.admin;
    const detailQuery = `
        SELECT 
        narapidana.id_narapidana, 
        narapidana.nama_narapidana,
        narapidana.no_ktp,
        narapidana.umur,
        tempat_lahir,
        tanggal_lahir,
        alamat_lengkap,
        pendidikan_terakhir,
        agama,
        sisa_masa_tahanan,
        narapidana.register,
        narapidana.createdAt,
        pekerjaan.nama_pekerjaan,
        tindak_pidana.jenis_tindak_pidana,
        admin.id_admin AS id_wali,
        admin.nama_lengkap AS nama_wali
    FROM 
        narapidana
    JOIN 
        pekerjaan ON narapidana.pekerjaan_semula = pekerjaan.id_pekerjaan
    JOIN 
        admin ON narapidana.nama_wali = admin.id_admin
    JOIN
        tindak_pidana ON narapidana.tindak_pidana = tindak_pidana.id_tindak_pidana
    WHERE 
        id_narapidana = ?`;

    db.query(detailQuery, [idNarapidana], (err, results) => {
        if (err) {
            throw err;
        } else {
            const narapidanaData = results[0]; // Ambil data narapidana dari hasil query

            if (narapidanaData) {
                console.log(narapidanaData);
                res.render('detail_narapidana', {
                    narapidana: narapidanaData, // Kirim data narapidana ke halaman detail_narapidana
                    admin: adminData
                });
            } else {
                // Jika tidak ada data yang ditemukan, Anda dapat menangani kasus ini di sini
                res.send('Data Narapidana tidak ditemukan');
            }
        }
    });
};


exports.addNarapidanaPage = (req, res) => {
    // Dapatkan data admin dari session dan gunakan sesuai kebutuhan
    const adminData = req.session.admin;

    try {
        const readQueryPekerjaan = "SELECT * FROM pekerjaan";
        const readQueryTindakPidana = "SELECT * FROM tindak_pidana";

        db.query(readQueryPekerjaan, (err, resultsPekerjaan) => {
            if (err) {
                throw err;
            } else {
                db.query(readQueryTindakPidana, (err, resultsTindakPidana) => {
                    if (err) {
                        throw err;
                    } else {
                        res.render('add_narapidana', {
                            admin: adminData,
                            pekerjaanData: resultsPekerjaan,
                            tindakPidanaData: resultsTindakPidana // Menambahkan data tindak pidana ke dalam objek yang akan dilewatkan ke template
                        });
                    }
                });
            }
        });

    } catch (error) {
        console.log(error);
    }
}


exports.editNarapidanaPage = (req, res) => {
    const idNarapidana = req.params.id_narapidana; // Ambil id_narapidana dari parameter URL
    const adminData = req.session.admin;
    const detailQuery = `
        SELECT 
            narapidana.id_narapidana, 
            narapidana.nama_narapidana,
            narapidana.no_ktp,
            narapidana.umur,
            tempat_lahir,
            tanggal_lahir,
            alamat_lengkap,
            pendidikan_terakhir,
            agama,
            narapidana.pekerjaan_semula,
            sisa_masa_tahanan,
            narapidana.register,
            narapidana.createdAt,
            pekerjaan.nama_pekerjaan, 
            admin.id_admin AS id_wali,
            admin.nama_lengkap AS nama_wali
        FROM 
            narapidana
        JOIN 
            pekerjaan ON narapidana.pekerjaan_semula = pekerjaan.id_pekerjaan
        JOIN 
            admin ON narapidana.nama_wali = admin.id_admin
        WHERE 
            id_narapidana = ?`;

    const pekerjaanQuery = `SELECT * FROM pekerjaan`; // Query untuk mengambil semua data pekerjaan

    // Eksekusi kedua query secara bersamaan
    db.query(detailQuery, [idNarapidana], (errDetail, resultsDetail) => {
        if (errDetail) {
            throw errDetail;
        } else {
            const narapidanaData = resultsDetail[0]; // Ambil data narapidana dari hasil query

            db.query(pekerjaanQuery, (errPekerjaan, resultsPekerjaan) => {
                if (errPekerjaan) {
                    throw errPekerjaan;
                } else {
                    const pekerjaanResults = resultsPekerjaan; // Ambil semua data pekerjaan

                    if (narapidanaData) {
                        console.log(narapidanaData);
                        res.render('edit_narapidana', {
                            narapidana: narapidanaData, // Kirim data narapidana ke halaman detail_narapidana
                            pekerjaanData: pekerjaanResults, // Kirim data pekerjaan ke halaman detail_narapidana
                            admin: adminData
                        });
                    } else {
                        // Jika tidak ada data yang ditemukan, Anda dapat menangani kasus ini di sini
                        res.send('Data Narapidana tidak ditemukan');
                    }
                }
            });
        }
    });
};


exports.postNarapidana = (req, res) => {

    /*
    dengan catatan register yaitu putusan. */
    let narapidanaData = {
        // atribut fix.
        nama_narapidana: req.body.nama_narapidana,
        tempat_lahir: req.body.tempat_lahir,
        tanggal_lahir: req.body.tanggal_lahir,
        alamat_lengkap: req.body.alamat_lengkap,
        no_ktp: req.body.no_ktp,
        pendidikan_terakhir: req.body.pendidikan_terakhir,
        pekerjaan_semula: req.body.pekerjaan_semula,
        agama: req.body.agama,
        tindak_pidana:req.body.tindak_pidana,

        //atribut blm fix.
        sisa_masa_tahanan: req.body.sisa_masa_tahanan,
        register: req.body.register,
        nama_wali: req.body.nama_wali
        // status_narapidana: req.body.status_narapidana
    }

    // Menghitung umur dari tanggal lahir
    const tanggalLahir = new Date(narapidanaData.tanggal_lahir);
    const sekarang = new Date();
    let umur = sekarang.getFullYear() - tanggalLahir.getFullYear();

    // Jika belum ulang tahun pada tahun ini, kurangi umur
    if (sekarang.getMonth() < tanggalLahir.getMonth() || (sekarang.getMonth() === tanggalLahir.getMonth() && sekarang.getDate() < tanggalLahir.getDate())) {
        umur--;
    }

    // Menambahkan properti umur ke dalam objek narapidanaData
    narapidanaData.umur = umur;

    const insertQuery = "INSERT INTO narapidana SET ?";

    db.query(insertQuery, narapidanaData, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error saat menyimpan data");
            return;
        }
        // console.log("Data narapidana berhasil disimpan");
        // res.status(200).send("Data narapidana berhasil disimpan");
        req.flash('tambahInfo', 'Data narapidana berhasil ditambah!')
        res.redirect('/data/data_narapidana');

    });
}


exports.deleteNarapidana = (req,res)=>{
    const id_narapidana= req.params.id_narapidana;

    const deleteQuery = 'DELETE FROM narapidana WHERE id_narapidana = ?';
 
    db.query(deleteQuery, [id_narapidana], (error, results) => {
        if (error) {
            console.error('Error deleting location:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        else{
            // res.send('sukses hapus')
            req.flash('deleteInfo','Data narapidana berhasil dihapus!')
            res.redirect('/data/data_narapidana');
        }



        // res.status(204).end(); // No Content
    });
}




exports.postUpdateNarapidana = (req, res) => {
    const id_narapidana = req.params.id_narapidana;
    const { nama_narapidana, alamat_lengkap, tempat_lahir, tanggal_lahir, agama, pendidikan_terakhir, pekerjaan_semula, sisa_masa_tahanan, register } = req.body;

    // Hitung umur berdasarkan tanggal lahir baru
    const today = new Date();
    const birthDate = new Date(tanggal_lahir);
    let umur = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        umur--;
    }

    // Siapkan array untuk menampung nilai-nilai yang akan di-update
    const updateValues = [nama_narapidana, umur, alamat_lengkap, tempat_lahir, tanggal_lahir, agama, pendidikan_terakhir, pekerjaan_semula, sisa_masa_tahanan, register, id_narapidana];

    // Query SQL untuk memperbarui data narapidana dengan prepared statement
    const sql = `
        UPDATE narapidana 
        SET 
            nama_narapidana = ?, 
            umur = ?, 
            alamat_lengkap = ?, 
            tempat_lahir = ?, 
            tanggal_lahir = ?, 
            agama = ?, 
            pendidikan_terakhir = ?, 
            pekerjaan_semula = ?, 
            sisa_masa_tahanan = ?, 
            register = ? 
        WHERE id_narapidana = ?`;

    db.query(sql, updateValues, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Terjadi kesalahan dalam memperbarui data narapidana.');
            return;
        }

        // Periksa apakah data berhasil diperbarui
        if (result.affectedRows === 0) {
            res.status(404).send('Data narapidana tidak ditemukan.');
            return;
        }

        req.flash('updateInfo', 'Data narapidana berhasil di update!')
        // Jika berhasil, kirimkan respons berhasil
        res.redirect('/data/data_narapidana');
    });
};



exports.penilaianPage = (req,res)=>{
    const locals = {
        title : "Beri Penilaian"
    }

    const adminData = req.session.admin;
    res.render('add_penilaian',{
        locals,
        admin: adminData
    });
}