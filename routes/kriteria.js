const express = require('express');
const { kriteriaPage, addKriteriaPage, postKriteria, deleteKritera, putEditKriteria } = require('../controllers/kriteriaController');
const router = express.Router();



router.get('/data_kriteria', kriteriaPage)
router.get('/add_kriteria', addKriteriaPage)


router.post('/post_kriteria', postKriteria);
router.delete('/delete_kriteria/:id_kriteria', deleteKritera);


router.post('/edit_kriteria', putEditKriteria);


module.exports = router;