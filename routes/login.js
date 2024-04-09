const express = require('express');
const { loginPage } = require('../controllers/loginController');
const {adminController} = require('../controllers/mergeController')
const router = express.Router();



router.get('/', loginPage)
router.post('/login', adminController.login);





module.exports = router;