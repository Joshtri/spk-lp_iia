



exports.loginPage = (req,res)=>{
    const locals = {
        title: "Login Page"
    }
    const messageLogin1 = req.flash('loginFail');
    const messageLogin2 = req.flash('loginFail2');
    
    res.render('index',{
        locals,
        messageLogin1,
        messageLogin2
    });
}

