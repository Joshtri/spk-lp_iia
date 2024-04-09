const express = require('express');
const { narapidanaPage , detailNarapidanaPage, addNarapidanaPage, editNarapidanaPage, postNarapidana} = require('../controllers/narapidanaController');
const router = express.Router();
const protect = require('../auth/protect');


router.get('/data_narapidana',protect, narapidanaPage)
router.get('/detail_narapidana',protect, detailNarapidanaPage)
router.get('/add_narapidana',protect, addNarapidanaPage)
router.get('/edit_narapidana',protect, editNarapidanaPage)



router.post('/post_narapidana', postNarapidana)

module.exports = router;