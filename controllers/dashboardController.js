



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