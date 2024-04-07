const db = require('../utils/database');


exports.kriteriaPage = (req,res)=>{
    res.render('data_kriteria');
}



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

            console.log('tambah data berhasil.');
        }
    })

}


exports.addKriteriaPage = (req,res)=>{
    res.render('add_kriteria');
}