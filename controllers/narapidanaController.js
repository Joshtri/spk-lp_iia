



exports.narapidanaPage = (req,res)=>{
    const locals = {
        title : "data narapidana"
    }
    res.render('data_narapidana');
}

exports.detailNarapidanaPage = (req,res)=>{
    res.render('detail_narapidana');
}

exports.addNarapidanaPage = (req,res)=>{
    res.render('add_narapidana');
}

exports.editNarapidanaPage = (req,res)=>{
    res.render('edit_narapidana');
}

