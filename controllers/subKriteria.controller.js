import Sub_Kriteria from '../models/subKriteria.model.js';
import * as subKriteriaService from '../services/subKriteria.services.js';


export const getDetailKriteria = async(req,res)=>{
    const title = "Detail Kriteria"
    // Dapatkan data user dari session dan gunakan sesuai kebutuhan
    const userData = req.session.user;

    try {
        const kriteriaId = req.params.id
        const kriteriaDetailSub = await subKriteriaService.getSubKriteriaByIdKriteria(kriteriaId);

        res.render('detail_subKriteria',{
            title,
            kriteriaDetailSub,
            user: userData

        })
    } catch (error) {
        throw error;   
    }
};


export const createSubKriteria = async(req,res)=>{
    try {
        const subKriteriaData = req.body;
        const newSubKriteria = await subKriteriaService.createSubKriteria(subKriteriaData);

        await req.flash("tambahInfo", "Data sub kriteria berhasil ditambahkan.");

        res.redirect('/data/kriteria')
    } catch (error) {
        throw error;
    }
}


// export const deleteSubKriteria = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const resultDelete = await subKriteriaService.deleteSubKriteria(id);

//         if (resultDelete) {
//             await req.flash("deleteInfo", "Data Sub kriteria berhasil dihapus.");
//             // res.redirect(`/data/subKriteria/${id}`); // Redirect dengan ID yang dihapus
//             res.redirect('/data/kriteria')
//         } else {
//             await req.flash("deleteInfo", "Data kriteria tidak ditemukan dan gagal dihapus.");
//             // res.redirect(`/data/subKriteria/${id}`);
//             res.redirect('/data/kriteria')
//         }
//     } catch (error) {
//         throw error;
//     }
// }

export const deleteSubKriteria = async (req, res) => {
    const { id } = req.params; // Ambil id sub kriteria dari params
    let kriteriaId;

    try {
        // Ambil kriteriaId terlebih dahulu dari sub kriteria yang akan dihapus
        const subKriteria = await Sub_Kriteria  .findByPk(id);
        if (!subKriteria) {
            throw new Error('Sub Kriteria not found');
        }
        kriteriaId = subKriteria.kriteriaId; // Ambil kriteriaId dari sub kriteria

        // Hapus sub kriteria
        await subKriteria.destroy();

        // Redirect kembali ke halaman dengan kriteriaId yang terkait
        res.redirect(`/data/subKriteria/${kriteriaId}`);
    } catch (error) {
        res.status(500).json({ message: `Error deleting Sub Kriteria: ${error.message}` });
    }
};


