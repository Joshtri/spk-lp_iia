const express = require('express');
const { narapidanaPage , detailNarapidanaPage, addNarapidanaPage, editNarapidanaPage, postUpdateNarapidana, postNarapidana, deleteNarapidana, penilaianPage} = require('../controllers/narapidanaController');
const router = express.Router();
const protect = require('../auth/protect');


router.get('/data_narapidana',protect, narapidanaPage)
router.get('/detail_narapidana/:id_narapidana',detailNarapidanaPage)
router.get('/add_narapidana',protect, addNarapidanaPage)
router.get('/edit_narapidana/:id_narapidana',protect, editNarapidanaPage)



router.post('/update_narapidana/:id_narapidana', postUpdateNarapidana);
router.delete('/delete_narapidana/:id_narapidana', deleteNarapidana);

router.post('/post_narapidana', postNarapidana);


router.get('/penilaian_napi', penilaianPage);
module.exports = router;