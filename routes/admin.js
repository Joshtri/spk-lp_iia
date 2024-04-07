const express = require('express');
const { adminPage } = require('../controllers/adminController');
const router = express.Router();



router.get('/data_admin', adminPage)





module.exports = router;