const express = require('express');
const { loginPage } = require('../controllers/loginController');
const router = express.Router();



router.get('/', loginPage)





module.exports = router;