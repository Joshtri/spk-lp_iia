import * as kriteriaRepository from "../repositories/kriteria.repository.js";
import  * as narapidanaRepository from "../repositories/narapidana.repository.js";
import * as userRepository from '../repositories/user.repository.js'



export const dashboardPage = async(req,res)=>{
    const title = "Dashboard";
    const totalKriteria = await kriteriaRepository.totalKriteria();
    const totalNarapidana = await narapidanaRepository.totalNarapidana();
    const totalUser = await userRepository.totalUser();

    // Dapatkan data user dari session dan gunakan sesuai kebutuhan
    const userData = req.session.user;

    const messageLoginSuccess = req.flash('loginSuccessInfo');


    try {
        res.render('dashboard',{
            title,
            user: userData,
            totalKriteria,
            totalNarapidana,
            totalUser,
            messageLoginSuccess,
        });
    } catch (error) {
        throw error;
    }
};


export const myProfilePage = async (req,res)=>{
    try {            
        // Dapatkan data user dari session dan gunakan sesuai kebutuhan
        const userData = req.session.user;

        res.render('my_profile',{
            user: userData 
        })
    } catch (error) {
        
    }
};