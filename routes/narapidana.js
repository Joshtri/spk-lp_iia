const express = require('express');
const { narapidanaPage , detailNarapidanaPage, addNarapidanaPage, editNarapidanaPage} = require('../controllers/narapidanaController');
const router = express.Router();

router.get('/data_narapidana', narapidanaPage)
router.get('/detail_narapidana', detailNarapidanaPage)
router.get('/add_narapidana', addNarapidanaPage)
router.get('/edit_narapidana', editNarapidanaPage)

module.exports = router;