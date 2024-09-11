import Kriteria from '../models/kriteria.model.js';
import * as kriteriaService from '../services/kriteria.services.js';


export const kriteriaPage = async (req, res) => {
  const title = "Data Kriteria";
  const userData = req.session.user;
  const currentPage = parseInt(req.query.page) || 1;
  const itemsPerPage = 10; // You can adjust this value as needed

  try {
      const { kriteriaData, totalItems } = await kriteriaService.getKriteria(currentPage, itemsPerPage);
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      const messagePost = req.flash("tambahInfo");
      const messageUpdate = req.flash("updateInfo");
      const messageDelete = req.flash("deleteInfo");

      res.render('data_kriteria', {
          title,
          kriteriaData,
          messagePost,
          messageUpdate,
          messageDelete,
          user: userData,
          currentPage,
          totalPages,
          itemsPerPage // Pass itemsPerPage to the template
      });
  } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
  }
};

export const createKriteria = async(req,res)=>{
  try {
    const kriteriaData = req.body;
    const newKriteria = await kriteriaService.createKriteria(kriteriaData);

    await req.flash('tambahInfo', 'data kriteria berhasil ditambahkan')
    res.redirect('/data/kriteria');
  } catch (error) {
    throw error;
  }
};

export const deleteKriteria = async(req,res)=>{
  try {
    const id = req.params.id;
    const resultDelete = await kriteriaService.deleteKriteria(id);

    if (resultDelete) {
      // res.status(200).json({ message: 'Kriteria deleted successfully' });
      await req.flash('deleteInfo', 'Data kriteria berhasil dihapus.')
      res.redirect('/data/kriteria')
    } else {
      await req.flash('deleteInfo', 'Data kriteria tidak ditemukan dan gagal dihapus.')
      res.redirect('/data/kriteria')
    }
  } catch (error) {
    throw error;
  }
}

export const getKriteriaById = async (req, res) => {
  const title = "Detail kriteria"
  try {
    const id = req.params.id;
    const kriteriaDetail = await kriteriaService.getKriteriaById(id);

    res.render('detail_kriteria',{
      title,
      kriteriaDetail
    })
    // res.json(kriteria);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Handle the update of kriteria data
// Handle the update of kriteria data
export const updateKriteria = async (req, res) => {
  try {
      const { id_kriteria, nama_kriteria } = req.body;

      // Check if id_kriteria and nama_kriteria are provided
      if (!id_kriteria || !nama_kriteria) {
          return res.status(400).send('Bad Request: Missing fields');
      }

      // Update kriteria data
      const [updated] = await Kriteria.update({
          nama_kriteria
      }, {
          where: { id_kriteria }
      });

      if (!updated) {
          return res.status(404).send('Kriteria not found');
      }

      // Redirect or send a response after update
      res.redirect('/data/kriteria'); // Adjust the redirect path as needed
  } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
  }
};