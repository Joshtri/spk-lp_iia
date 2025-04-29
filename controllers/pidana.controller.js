import * as pidanaService from "../services/pidana.services.js";

export const pidanaPage = async (req, res) => {
  const title = "Data Pidana";
  const userData = req.session.user;

  const messagePost = req.flash("tambahInfo");
  const messageUpdate = req.flash("updateInfo");
  const messageDelete = req.flash("deleteInfo");

  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const allData = await pidanaService.getTindakPidana(); // semua data
    const totalItems = allData.length;
    const totalPages = Math.ceil(totalItems / limit);
    const currentPageData = allData.slice(offset, offset + limit);

    res.render("data_pidana", {
      title,
      user: userData,
      messagePost,
      messageUpdate,
      messageDelete,
      tindakPidanaData: currentPageData,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    throw error;
  }
};

export const createTindakPidana = async (req,res)=>{
    try {
        const tindakPidanaData = req.body;
        const newTindakPidana = await pidanaService.createTindakPidana(tindakPidanaData);

        await req.flash("tambahInfo", "Data kriteria berhasil ditambahkan.");

        res.redirect('/data/pidana')

    } catch (error) {
        throw error;
    }
}

export const deleteTindakPidana = async (req, res) => {
  try {
    const id = req.params.id;
    const resultDelete = await pidanaService.deleteTindakPidana(id);

    if (resultDelete) {
      // res.status(200).json({ message: 'Kriteria deleted successfully' });
      await req.flash("deleteInfo", "Data kriteria berhasil dihapus.");
      res.redirect("/data/pidana");
    } else {
      await req.flash(
        "deleteInfo",
        "Data kriteria tidak ditemukan dan gagal dihapus."
      );
      res.redirect("/data/pidana");
    }
  } catch (error) {
    throw error;
  }
};


export const updateTindakPidana = async (req, res) => {
  const { id_tindak_pidana } = req.body; // Assuming the ID is passed in the body for a POST request
  const updateData = req.body;

  try {
    const updatedPidana = await pidanaService.modifyTindakPidana(id_tindak_pidana, updateData);
    // res.status(200).json({ message: 'Tindak Pidana updated successfully', data: updatedPidana });

    await req.flash('updateInfo','Data tindak Pidana Berhasil di update');
    res.redirect('/data/pidana')
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};