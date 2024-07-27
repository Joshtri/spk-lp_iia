

//menggunakan TOPSIS
export const perhitunganPage = async(req,res)=>{
    const title = "Perhitungan TOPSIS"
    // Dapatkan data user dari session dan gunakan sesuai kebutuhan
    const userData = req.session.user;

    try {

        res.render('perhitungan',{
            title,
            user: userData
        });
    } catch (error) {
        throw error;
    }
};