import * as kriteriaRepository from "../repositories/kriteria.repository.js";
import  * as narapidanaRepository from "../repositories/narapidana.repository.js";
import * as userRepository from '../repositories/user.repository.js'



// export const dashboardPage = async(req,res)=>{
//     const title = "Dashboard";
//     const totalKriteria = await kriteriaRepository.totalKriteria();
//     const totalNarapidana = await narapidanaRepository.totalNarapidana();
//     const totalUser = await userRepository.totalUser();

//     // Dapatkan data user dari session dan gunakan sesuai kebutuhan
//     const userData = req.session.user;

//     const messageLoginSuccess = req.flash('loginSuccessInfo');


//     try {
//         res.render('dashboard',{
//             title,
//             user: userData,
//             totalKriteria,
//             totalNarapidana,
//             totalUser,
//             messageLoginSuccess,
//         });
//     } catch (error) {
//         throw error;
//     }
// };


export const dashboardPage = async (req, res) => {
    const title = "Dashboard";
    const userData = req.session.user;
    const role = userData?.role;
    const messageLoginSuccess = req.flash('loginSuccessInfo');

    try {
        let viewData = {
            title,
            user: userData,
            messageLoginSuccess,
        };

        if (role === 'admin' || role === 'wali pemasyarakatan') {
            const totalKriteria = await kriteriaRepository.totalKriteria();
            const totalNarapidana = await narapidanaRepository.totalNarapidana();
            const totalUser = await userRepository.totalUser();

            viewData = {
                ...viewData,
                totalKriteria,
                totalNarapidana,
                totalUser,
            };
        } else if (role === 'koordinator wali' || role === 'kepala lapas') {
            const totalNarapidana = await narapidanaRepository.totalNarapidana();
            const totalWaliPemasyarakatan = await userRepository.countByRole("wali pemasyarakatan");

            viewData = {
                ...viewData,
                totalNarapidana,
                totalWaliPemasyarakatan,
            };
        }

        res.render("dashboard", viewData);
    } catch (error) {
        console.error("Error rendering dashboard:", error);
        res.status(500).send("Internal Server Error");
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
