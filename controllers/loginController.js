



exports.loginPage = (req,res)=>{
    const locals = {
        title: "Login Page"
    }
    const messageLogin1 = req.flash('loginFail');
    const messageLogin2 = req.flash('loginFail2');
    const messageRegister = req.flash('infoRegister')
    res.render('index',{
        locals,
        messageLogin1,
        messageLogin2,
        messageRegister
    });
}



exports.SignUpPage = (req,res)=>{
    const locals = {
        title: "Sign Up Page"
    }
    const messageLogin1 = req.flash('loginFail');
    const messageLogin2 = req.flash('loginFail2');
    
    res.render('sign_up',{
        locals,
        messageLogin1,
        messageLogin2
    });
}

