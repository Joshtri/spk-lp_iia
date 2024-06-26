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
    // getPage: (req,res)=>{
    //     try {
    //         const readQuery = "SELECT * FROM pekerjaan";
    //         // Dapatkan data admin dari session dan gunakan sesuai kebutuhan
    //         const adminData = req.session.admin;
            
    //         db.query(readQuery, (err,resultsRead)=>{
    //             if(err){
    //                 throw err;
    //             }

    //             else if (!err){
    //                 res.render('data_pekerjaan',{
    //                     pekerjaanData: resultsRead,
    //                     admin : adminData
    //                 });
    //                 // res.json(resultsRead);
    //                 // console.log(resultsRead);
    //             }
    //         });
    //     } catch (error) {
            
    //     }
    // },

    getPage : (req, res) => {
        // Define pagination parameters
        const page = req.query.page || 1; // Default page is 1
        const limit = 7; // Number of items per page
    
        // Calculate offset based on page and limit
        const offset = (page - 1) * limit;
        const adminData = req.session.admin;
        // Fetch data from the database with pagination
        const queryRead = `SELECT * FROM pekerjaan LIMIT ${limit} OFFSET ${offset}`;
    
        db.query(queryRead, (error, results, fields) => {
            if (error) {
                console.error('Error fetching data:', error);
                // Handle error, render an error page or send an error response
                return res.status(500).send('Internal Server Error');
            }
    
            // Count total number of items for pagination
            const totalCountQuery = 'SELECT COUNT(*) AS totalCount FROM pekerjaan';
            db.query(totalCountQuery, (error, countResults) => {
                if (error) {
                    console.error('Error counting total data:', error);
                    // Handle error, render an error page or send an error response
                    return res.status(500).send('Internal Server Error');
                }

                const messagePost = req.flash('tambahInfo');
                const messageDelete = req.flash('deleteInfo');
                const messageUpdate = req.flash('updateInfo');
    
                // Calculate total number of pages
                const totalCount = countResults[0].totalCount;
                const totalPages = Math.ceil(totalCount / limit);
    
                // Data fetched successfully, render the view with the fetched data and pagination info
                const locals = {
                    title: 'Data Pekerjaan',
                    pekerjaanData: results, // Pass fetched data to the view
                    currentPage: parseInt(page), // Current page number
                    totalPages: totalPages, // Total number of pages
                    limit: limit, // Number of items per page
                    admin: adminData,
                    messagePost,
                    messageDelete,
                    messageUpdate
                };
    
                res.render('data_pekerjaan', locals); // Sending locals object directly
            });
        });
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
                    req.flash('tambahInfo', 'Data Pekerjaan berhasil di tambah!')
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
                req.flash('deleteInfo','Data pekerjaan berhasil dihapus!')
                res.redirect('/data/data_pekerjaan');
            }
    
    
    
            // res.status(204).end(); // No Content
        });
    },

    update: (req,res)=>{
        const { nama_pekerjaan, id_pekerjaan } = req.body;

        // Lakukan query SQL untuk update data kriteria
        const sql = 'UPDATE pekerjaan SET nama_pekerjaan = ? WHERE id_pekerjaan = ?';
        db.query(sql, [nama_pekerjaan, id_pekerjaan], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Terjadi kesalahan dalam menyimpan perubahan pada kriteria.');
                return;
            }
    
            console.log(result);
            req.flash('updateInfo', "Data pekerjaan berhasil di update !")
            res.redirect('/data/data_pekerjaan');
            // Jika update berhasil, kembalikan respon berhasil
            // res.status(200).send('Perubahan pada kriteria berhasil disimpan.');
        });
    }
    
}


const adminController=  {
    getPage: (req,res)=>{

        const readQuery = "SELECT * FROM admin";
        // Dapatkan data admin dari session dan gunakan sesuai kebutuhan
        const adminData = req.session.admin;
    
        db.query(readQuery,(err,readResults)=>{
            if(err){
                throw err;

            }

            else if(!err){

                const messagePost = req.flash('tambahInfo')
                const messageDelete = req.flash('deleteInfo');
                

                res.render('data_admin',{
                    adminData:readResults,
                    admin:adminData,
                    messagePost,
                    messageDelete
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
                            // console.log("Data berhasil ditambahkan:", result);
                            req.flash('tambahInfo','Data admin berhasil dihapus!')
                            res.redirect('/data/data_admin')
                            // Redirect ke halaman atau kirim respon berhasil
                            // return res.status(200).send("Data berhasil ditambahkan.");
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
                req.flash('deleteInfo','Data admin berhasil dihapus!')
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
                    // return res.status(400).send("Username tidak valid.");
                    req.flash('loginFail2', 'Username yang diinput tidak valid !')     
                    return res.redirect('/'); // kembali ke url login.
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
                        req.flash('loginSuccessInfo', 'Log in berhasil !')                           
                        return res.redirect('/adm/dashboard');
                    } else {
                        // Jika password tidak cocok, kirim pesan bahwa password tidak valid
                        req.flash('loginFail', 'Password yang anda input tidak valid!')     
                        res.redirect('/'); // kembali ke url login.
                        // return res.status(400).send("Password tidak valid.");
                    }
                }
            });
    
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
            // Handle kesalahan umum
            return res.status(500).send("Terjadi kesalahan.");
        }
    },

    // Fungsi untuk mengubah password admin
    changePassword: (req, res) => {
        // Mendapatkan ID admin dari sesi
        const adminId = req.session.admin.id_admin;

        // Mendapatkan password baru dari body permintaan
        const { newPassword } = req.body;

        // Hash password baru menggunakan bcrypt
        bcrypt.hash(newPassword, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Error hashing new password:', err);
                return res.status(500).send('Internal Server Error');
            }

            // Query untuk mengupdate password baru ke dalam database
            const queryUpdatePassword = "UPDATE admin SET password = ? WHERE id_admin = ?";

            db.query(queryUpdatePassword, [hashedPassword, adminId], (error, results) => {
                if (error) {
                    console.error('Error updating password:', error);
                    return res.status(500).send('Internal Server Error');
                }

                // Password berhasil diubah
                // Logout session login user
                req.logout((logoutErr) => {
                    if (logoutErr) {
                        console.error('Error logging out:', logoutErr);
                        return res.status(500).send('Internal Server Error');
                    }

                    // Redirect ke halaman login
                    res.redirect('/');
                });
            });
        });
    },

    signUp: (req,res)=>{
        // Extract data from request body
        const { nama_lengkap, username, email, password } = req.body;

        // Hash the password
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Error hashing password:', err);
                return res.status(500).send('Internal Server Error');
            }

            // Define the default role
            const role = 'wali pemasyarakatan';

            // SQL query to insert new user into the database with default role
            const query = 'INSERT INTO admin (nama_lengkap, username, email, password, role) VALUES (?, ?, ?, ?, ?)';

            // Execute the query
            db.query(query, [nama_lengkap, username, email, hashedPassword, role], (error, results) => {
                if (error) {
                    console.error('Error inserting user:', error);
                    return res.status(500).send('Internal Server Error');
                }

                // User successfully registered
                // return res.status(200).send('User registered successfully');
                req.flash('infoRegister', "Akun anda berhasil dibuat, silahkan login menggunakan data tersebut")
                res.redirect('/');
            });
        });
    }

     
}


const tindakPidanaController = {
    getPage: (req, res) => {
        // Define pagination parameters
        const page = req.query.page || 1; // Default page is 1
        const limit = 7; // Number of items per page
    
        // Calculate offset based on page and limit
        const offset = (page - 1) * limit;
        const adminData = req.session.admin;
        // Fetch data from the database with pagination
        const queryRead = `SELECT * FROM tindak_pidana LIMIT ${limit} OFFSET ${offset}`;
    
        db.query(queryRead, (error, results, fields) => {
            if (error) {
                console.error('Error fetching data:', error);
                // Handle error, render an error page or send an error response
                return res.status(500).send('Internal Server Error');
            }
    
            // Count total number of items for pagination
            const totalCountQuery = 'SELECT COUNT(*) AS totalCount FROM tindak_pidana';
            db.query(totalCountQuery, (error, countResults) => {
                if (error) {
                    console.error('Error counting total data:', error);
                    // Handle error, render an error page or send an error response
                    return res.status(500).send('Internal Server Error');
                }
    
                const messagePost = req.flash('tambahInfo');
                const messageDelete = req.flash('deleteInfo');
                const messageUpdate = req.flash('updateInfo');
    
                // Calculate total number of pages
                const totalCount = countResults[0].totalCount;
                const totalPages = Math.ceil(totalCount / limit);
    
                // Data fetched successfully, render the view with the fetched data and pagination info
                const locals = {
                    title: 'Data Tindak Pidana',

                };
    
                // Render the view with pagination
                res.render('data_tindak_pidana', {
                    locals,
                    tindakPidanaData: results, // Pass fetched data to the view
                    currentPage: parseInt(page), // Current page number
                    totalPages: totalPages, // Total number of pages
                    limit: limit, // Number of items per page
                    admin: adminData,
                    messagePost,
                    messageDelete,
                    messageUpdate
                
                });
            });
        });
    },

    create : (req,res)=>{
        try {
            const { jenis_tindak_pidana,pasal_kuhp} = req.body;
            
            if (!jenis_tindak_pidana) {
                throw new Error("Nama Tindak Pidana tidak boleh kosong");
            }
            
            const insertQuery = "INSERT INTO tindak_pidana (jenis_tindak_pidana, pasal_kuhp) VALUES (?, ?)";
            db.query(insertQuery, [jenis_tindak_pidana, pasal_kuhp], (err, results) => {
                if (err) {
                    throw err;
                } else {
                    // res.send("Data pekerjaan berhasil ditambahkan.");
                    req.flash('tambahInfo', 'Data Tindak Pidana berhasil di tambah!')
                    res.redirect('/data/data_tindak_pidana');
                }
            });
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
            res.status(500).send("Terjadi kesalahan saat menambahkan tindak_pidana.");
        }
    }, 

    delete: (req,res)=>{
        const id_tindak_pidana = req.params.id_tindak_pidana;

        const deleteQuery = 'DELETE FROM tindak_pidana WHERE id_tindak_pidana = ?';
    
        db.query(deleteQuery, [id_tindak_pidana], (error, results) => {
            if (error) {
                console.error('Error deleting tindak_pidana:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
            else{
                // res.s    end('sukses hapus')
                req.flash('deleteInfo','Data Tindak Pidana berhasil dihapus!')
                res.redirect('/data/data_tindak_pidana');
            }
    
    
    
            // res.status(204).end(); // No Content
        });
    },

    update: (req, res) => {
        // Object destructuring untuk mendapatkan data yang dikirimkan dalam body request
        const { jenis_tindak_pidana, pasal_kuhp, id_tindak_pidana } = req.body;
    
        // Membuat query SQL untuk mengupdate data tindak pidana berdasarkan id_tindak_pidana
        const sql = 'UPDATE tindak_pidana SET jenis_tindak_pidana = ?, pasal_kuhp = ? WHERE id_tindak_pidana = ?';
    
        // Menjalankan query SQL dengan menggunakan data yang diberikan dalam body request
        db.query(sql, [jenis_tindak_pidana, pasal_kuhp, id_tindak_pidana], (err, result) => {
            if (err) {
                // Jika terjadi kesalahan, log pesan kesalahan dan kirim respon dengan status 500
                console.log(err);
                res.status(500).send('Terjadi kesalahan dalam menyimpan perubahan pada kriteria.');
                return;
            }
    
            // Jika update berhasil, log hasil query dan kirim pesan sukses menggunakan flash message
            console.log(result);
            req.flash('updateInfo', "Data tindak pidana berhasil diupdate!");
            
            // Redirect pengguna ke halaman data_tindak_pidana setelah berhasil melakukan update
            res.redirect('/data/data_tindak_pidana');
        });
    },


    
}

module.exports = {agamaController, pekerjaanController, adminController, tindakPidanaController}