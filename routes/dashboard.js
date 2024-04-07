const express = require('express');
const { dashboardPage } = require('../controllers/dashboardController');
const router = express.Router();



router.get('/dashboard', dashboardPage)





module.exports = router;