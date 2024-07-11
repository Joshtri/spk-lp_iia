// import {
//   fetchNarapidanaPageData,
//   fetchNarapidanaDetail,
//   addNarapidana,
//   removeNarapidanaById,
//   modifyNarapidanaById,
//   fetchAllPekerjaan,
//   fetchAllTindakPidana,
// } from "../services/narapidana.services.js";

// export const narapidanaPage = async (req, res) => {
//   const page = req.query.page || 1;
//   const adminData = req.session.admin;

//   try {
//     const { narapidanaData, totalPages, currentPage, limit } =
//       await fetchNarapidanaPageData(page);

//     const messagePost = req.flash("tambahInfo");
//     const messageUpdate = req.flash("updateInfo");
//     const messageDelete = req.flash("deleteInfo");

//     res.render("data_narapidana", {
//       title: "Data Narapidana",
//       narapidanaData,
//       currentPage,
//       totalPages,
//       limit,
//       admin: adminData,
//       messagePost,
//       messageDelete, 
//       messageUpdate,
//     });
//   } catch (err) {
//     req.flash("error", "Terjadi kesalahan saat mengambil data narapidana");
//     res.redirect("/");
//   }
// };

// export const getNarapidanaDetailById = async (req, res) => {
//   const idNarapidana = req.params.id;
//   const adminData = req.session.admin;

//   try {
//     const narapidanaData = await fetchNarapidanaDetail(idNarapidana);
//     res.render("detail_narapidana", {
//       title: "Detail Narapidana",
//       narapidana: narapidanaData,
//       admin: adminData,
//     });
//   } catch (err) {
//     req.flash("error", "Terjadi kesalahan saat mengambil detail narapidana");
//     res.redirect("/");
//   }
// };

// export const createNarapidana = async (req, res) => {
//   const newNarapidana = req.body;

//   try {
//     await addNarapidana(newNarapidana);
//     req.flash("tambahInfo", "Data narapidana berhasil ditambahkan");
//     res.redirect("/data_narapidana");
//   } catch (err) {
//     req.flash("error", "Terjadi kesalahan saat menambahkan narapidana");
//     res.redirect("/data_narapidana");
//   }
// };

// export const deleteNarapidana = async (req, res) => {
//   const idNarapidana = req.params.id;

//   try {
//     await removeNarapidanaById(idNarapidana);
//     req.flash("deleteInfo", "Data narapidana berhasil dihapus");
//     res.redirect("/data_narapidana");
//   } catch (err) {
//     req.flash("error", "Terjadi kesalahan saat menghapus narapidana");
//     res.redirect("/data_narapidana");
//   }
// };

// export const updateNarapidana = async (req, res) => {
//   const idNarapidana = req.params.id;
//   const updatedNarapidana = req.body;

//   try {
//     await modifyNarapidanaById(updatedNarapidana, idNarapidana);
//     req.flash("updateInfo", "Data narapidana berhasil diperbarui");
//     res.redirect("/data_narapidana");
//   } catch (err) {
//     req.flash("error", "Terjadi kesalahan saat memperbarui narapidana");
//     res.redirect("/data_narapidana");
//   }
// };

// export const getPekerjaanList = async (req, res) => {
//   try {
//     const pekerjaanData = await fetchAllPekerjaan();
//     res.json(pekerjaanData);
//   } catch (err) {
//     res
//       .status(500)
//       .json({ error: "Terjadi kesalahan saat mengambil data pekerjaan" });
//   }
// };

// export const getTindakPidanaList = async (req, res) => {
//   try {
//     const tindakPidanaData = await fetchAllTindakPidana();
//     res.json(tindakPidanaData);
//   } catch (err) {
//     res
//       .status(500)
//       .json({ error: "Terjadi kesalahan saat mengambil data tindak pidana" });
//   }
// };


import * as narapidanaService from '../services/narapidana.services.js'


import * as pidanaService from '../services/pidana.services.js'




export const narapidanaPage = async (req, res) => {
    const title = "Data Narapidana";
    const currentPage = parseInt(req.query.page) || 1;
    const itemsPerPage = 10; // You can adjust this value as needed

    try {
        const { narapidanaData, totalItems } = await narapidanaService.getNarapidana(currentPage, itemsPerPage);
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        // Dapatkan data user dari session dan gunakan sesuai kebutuhan
        const userData = req.session.user;

        const messagePost = req.flash("tambahInfo");
        const messageUpdate = req.flash("updateInfo");
        const messageDelete = req.flash("deleteInfo");

        res.render('data_narapidana', {
            narapidanaData,
            title,
            user: userData,
            messagePost,
            messageUpdate,
            messageDelete,
            currentPage,
            totalPages
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};



export const addNarapidanaPage = async(req,res)=>{
    const title = "Tambah Narapidana"
    const userData = req.session.user;

    const tindakPidanaData = await pidanaService.getTindakPidana();
    try {
        res.render('add_narapidana',{
            title,
            user : userData,
            tindakPidanaData
        });
    } catch (error) {
        throw  error
    }
};