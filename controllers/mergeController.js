const db = require('../utils/database');
const bcrypt = require('bcrypt');


//CONTROLLER UNTUK AGAMA
const agamaController = {
    getPage: (req,res)=>{
        try{

            res.render('data_agama');
        }
        catch(error){

        }
    },

    create: (req,res)=>{
        try{

            res.render('data_agama');
        }
        catch(error){

        }
    }

}

//CONTROLLER UNTUK PEKERJAAN
const pekerjaanController = {
    getPage: (req,res)=>{
        try {
            const readQuery = "SELECT * FROM pekerjaan";

            db.query(readQuery, (err,resultsRead)=>{
                if(err){
                    throw err;
                }

                else if (!err){
                    res.render('data_pekerjaan',{
                        pekerjaanData: resultsRead
                    });
                    // res.json(resultsRead);
                    // console.log(resultsRead);
                }
            });
        } catch (error) {
            
        }
    },
    create: (req, res) => {
        
        try {
            const { nama_pekerjaan } = req.body;
            
            if (!nama_pekerjaan) {
                throw new Error("Nama pekerjaan tidak boleh kosong");
            }
            
            const insertQuery = "INSERT INTO pekerjaan (nama_pekerjaan) VALUES (?)";
            db.query(insertQuery, [nama_pekerjaan], (err, results) => {
                if (err) {
                    throw err;
                } else {
                    // res.send("Data pekerjaan berhasil ditambahkan.");
                    res.redirect('/data/data_pekerjaan');
                }
            });
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
            res.status(500).send("Terjadi kesalahan saat menambahkan pekerjaan.");
        }
    
    },

    delete: (req, res) => {
        // try {
        //     const id_pekerjaan = req.params.id_pekerjaan; // Ambil ID dari parameter URL
            
        //     if (!id_pekerjaan) {
        //         throw new Error("ID pekerjaan tidak valid");
        //     }
    
        //     const deleteQuery = "DELETE FROM pekerjaan WHERE id_pekerjaan = ?";
        //     db.query(deleteQuery, [id_pekerjaan], (err, results) => {
        //         if (err) {
        //             throw err;
        //         } else {
        //             res.redirect('/data/data_pekerjaan');
        //         }
        //     });
        // } catch (error) {
        //     console.error("Terjadi kesalahan:", error);
        //     res.status(500).send("Terjadi kesalahan saat menghapus pekerjaan.");
        // }

        const id_pekerjaan = req.params.id_pekerjaan;

        const deleteQuery = 'DELETE FROM pekerjaan WHERE id_pekerjaan = ?';
    
        db.query(deleteQuery, [id_pekerjaan], (error, results) => {
            if (error) {
                console.error('Error deleting location:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
            else{
                // res.s    end('sukses hapus')
                res.redirect('/data/data_pekerjaan');
            }
    
    
    
            // res.status(204).end(); // No Content
        });
    }
    
}


const adminController=  {
    getPage: (req,res)=>{

        const readQuery = "SELECT * FROM admin";
    
        db.query(readQuery,(err,readResults)=>{
            if(err){
                throw err;

            }

            else if(!err){

                res.render('data_admin',{
                    adminData:readResults
                });
                console.log(readResults);
            }
        })

    },

    create: async (req, res) => {
        try {
            // Destructuring data dari req.body dan menyimpannya dalam variabel adminField
            const { nama_lengkap, username, password, email, role } = req.body;
    
            // Cek apakah username sudah terdaftar
            const queryCheckUsername = "SELECT * FROM admin WHERE username = ?";
            db.query(queryCheckUsername, [username], async (err, result) => {
                if (err) {
                    console.error("Gagal memeriksa username:", err);
                    return res.status(500).send("Terjadi kesalahan.");
                } else if (result.length > 0) {
                    // Jika username sudah terdaftar, kirim pesan bahwa username telah terdaftar
                    return res.status(400).send("Username yang Anda buat telah terdaftar.");
                } else {
                    // Hash password
                    const hashedPassword = await bcrypt.hash(password, 10);
    
                    // Objek adminField untuk digunakan dalam penyisipan data ke dalam database
                    const adminField = {
                        nama_lengkap,
                        username,
                        password: hashedPassword,
                        email,
                        role
                    };
    
                    // Lakukan penyisipan data ke dalam database dengan metode INSERT INTO ... SET
                    const queryInsert = "INSERT INTO admin SET ?";
                    db.query(queryInsert, adminField, (err, result) => {
                        if (err) {
                            console.error("Gagal menambahkan data:", err);
                            // Handle kesalahan saat menyisipkan data ke dalam database
                            return res.status(500).send("Gagal menambahkan data.");
                        } else {
                            // Jika penyisipan data berhasil
                            console.log("Data berhasil ditambahkan:", result);
                            // Redirect ke halaman atau kirim respon berhasil
                            return res.status(200).send("Data berhasil ditambahkan.");
                        }
                    });
                }
            });
    
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
            // Handle kesalahan umum
            return res.status(500).send("Terjadi kesalahan.");
        }
    },

    delete: (req,res)=>{
        const id_admin = req.params.id_admin;

        const deleteQuery = 'DELETE FROM admin WHERE id_admin = ?';
    
        db.query(deleteQuery, [id_admin], (error, results) => {
            if (error) {
                console.error('Error deleting admin:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
            else{
                // res.send('sukses hapus')
                res.redirect('/data/data_admin');
            }
    
    
    
            // res.status(204).end(); // No Content
        });
    },

    login: async (req, res) => {
        try {
            // Destructuring data dari req.body
            const { username, password } = req.body;
    
            // Query untuk mendapatkan data admin berdasarkan username
            const queryGetAdmin = "SELECT * FROM admin WHERE username = ?";
            db.query(queryGetAdmin, [username], async (err, result) => {
                if (err) {
                    console.error("Gagal mengambil data admin:", err);
                    return res.status(500).send("Terjadi kesalahan.");
                } else if (result.length === 0) {
                    // Jika username tidak ditemukan, kirim pesan bahwa username tidak valid
                    return res.status(400).send("Username tidak valid.");
                } else {
                    // Bandingkan password yang dimasukkan dengan password yang di-hash dalam database
                    const match = await bcrypt.compare(password, result[0].password);
                    if (match) {

                        // Simpan data admin ke dalam session
                        req.session.admin = {
                            id_admin: result[0].id_admin,
                            nama_lengkap: result[0].nama_lengkap,
                            username: result[0].username,
                            email: result[0].email,
                            role: result[0].role
                        };
                        // Jika password cocok, redirect ke halaman dashboard admin
                        return res.redirect('/adm/dashboard');
                    } else {
                        // Jika password tidak cocok, kirim pesan bahwa password tidak valid
                        return res.status(400).send("Password tidak valid.");
                    }
                }
            });
    
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
            // Handle kesalahan umum
            return res.status(500).send("Terjadi kesalahan.");
        }
    }
    
    
}

module.exports = {agamaController, pekerjaanController, adminController}