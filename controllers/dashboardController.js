



exports.dashboardPage = (req,res)=>{
    
    // Dapatkan data admin dari session dan gunakan sesuai kebutuhan
    const adminData = req.session.admin;

    res.render('dashboard',
    { 
        admin: adminData 
    });
}