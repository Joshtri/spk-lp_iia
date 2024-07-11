


export const userPage = async(req,res)=>{
    const title = "Data User";
    try {
        res.render('data_user',{
            title
        });
    } catch (error) {
        throw error;
    }
};

export const updatePasswordUser = async(req,res)=>{
    try {
        
    } catch (error) {
        throw error;
    }
};