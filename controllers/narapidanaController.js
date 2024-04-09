const db = require('../utils/database');



exports.narapidanaPage = (req, res) => {
    const locals = {
        title: "Data Narapidana"
    }

    const readQuery = `
        SELECT 
            narapidana.id_narapidana, 
            narapidana.nama_narapidana,
            narapidana.no_ktp,
            narapidana.register,
            pekerjaan.nama_pekerjaan, 
            admin.nama_lengkap AS nama_wali
        FROM 
            narapidana
        JOIN 
            pekerjaan ON narapidana.pekerjaan_semula = pekerjaan.id_pekerjaan
        JOIN 
            admin ON narapidana.nama_wali = admin.id_admin;
    `;
    // Dapatkan data admin dari session dan gunakan sesuai kebutuhan
    const adminData = req.session.admin;

    db.query(readQuery, (err,results)=>{
      if(err){
        throw err;
      }

      else {
        res.render('data_narapidana', {
            locals,
            admin: adminData,
            narapidanaData: results // Mengirimkan query ke halaman template
        });
      }
    })


}


exports.detailNarapidanaPage = (req,res)=>{
    res.render('detail_narapidana');
}

exports.addNarapidanaPage = (req,res)=>{
    // Dapatkan data admin dari session dan gunakan sesuai kebutuhan
    const adminData = req.session.admin;

    
    
    try {
        const readQuery = "SELECT * FROM pekerjaan";

        db.query(readQuery,(err,resultsPekerjaan)=>{
            if(err){
                throw err;
            }
            else {
                res.render('add_narapidana',{
                    admin:adminData,
                    pekerjaanData: resultsPekerjaan
                });
            }
        })
        
    } catch (error) {
        console.log(error);
    }

}

exports.editNarapidanaPage = (req,res)=>{
    res.render('edit_narapidana');
}



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
        pekerjaan_semula: req.body.pekerjaan_semula,
        agama: req.body.agama,

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
        console.log("Data narapidana berhasil disimpan");
        res.status(200).send("Data narapidana berhasil disimpan");
    });
}

