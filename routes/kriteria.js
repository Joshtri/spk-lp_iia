const express = require('express');
const { kriteriaPage, addKriteriaPage } = require('../controllers/kriteriaController');
const router = express.Router();



router.get('/data_kriteria', kriteriaPage)
router.get('/add_kriteria', addKriteriaPage)





module.exports = router;