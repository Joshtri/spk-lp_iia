import Sub_Kriteria from '../models/subKriteria.model.js';
import * as subKriteriaService from '../services/subKriteria.services.js';
import * as kriteriaService from '../services/kriteria.services.js'


export const getDetailKriteria = async(req,res)=>{
    const title = "Detail Kriteria"
    // Dapatkan data user dari session dan gunakan sesuai kebutuhan
    const userData = req.session.user;

    try {
        const kriteriaId = req.params.id
        const kriteriaDetailSub = await subKriteriaService.getSubKriteriaByIdKriteria(kriteriaId);

        res.render('detail_subKriteria',{
            title,
            user: userData,
            kriteriaDetailSub,

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

export const getKriteriaAndSubKriteria = async (req, res, next) => {
    const title = "Detail Kriteria";
    // Dapatkan data user dari session dan gunakan sesuai kebutuhan
    const userData = req.session.user;
    try {
        const { id } = req.params;

        // Mengambil data kriteria berdasarkan ID
        const kriteria = await kriteriaService.getKriteriaById(id);

        // Jika kriteria tidak ditemukan, kembalikan respon dengan status 404
        if (!kriteria) {
            return res.status(404).json({ error: 'Kriteria not found' });
        }

        // Mengambil data sub-kriteria berdasarkan ID kriteria
        const subKriteria = await subKriteriaService.getSubKriteriaByIdKriteria(id);

        // Menyusun data untuk respon yang menggabungkan kriteria dan sub-kriteria
        const data = {
            title,
            user: userData,
            kriteria: kriteria,
            subKriteria: subKriteria
        };

        // Mengirimkan respon sukses dengan data yang ditemukan
        res.render('detail_subKriteria', data);
    } catch (error) {
        // Menangani kesalahan yang mungkin terjadi
        console.error('Error in getKriteriaAndSubKriteria:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteSubKriteria = async (req, res) => {
    const { id } = req.params; // Ambil id sub kriteria dari params
    let kriteriaId;

    try {
        // Ambil kriteriaId terlebih dahulu dari sub kriteria yang akan dihapus
        const subKriteria = await Sub_Kriteria.findByPk(id);
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


