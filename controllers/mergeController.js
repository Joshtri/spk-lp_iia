const db = require('../utils/database');


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
        try {
            const id_pekerjaan = req.body.id_pekerjaan; // Ambil ID dari parameter URL
            
            if (!id_pekerjaan) {
                throw new Error("ID pekerjaan tidak valid");
            }
    
            const deleteQuery = "DELETE FROM pekerjaan WHERE id_pekerjaan = ?";
            db.query(deleteQuery, [id_pekerjaan], (err, results) => {
                if (err) {
                    throw err;
                } else {
                    res.redirect('/data/data_pekerjaan');
                }
            });
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
            res.status(500).send("Terjadi kesalahan saat menghapus pekerjaan.");
        }
    }
    
    
}

module.exports = {agamaController, pekerjaanController}