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