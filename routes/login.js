const express = require('express');
const { loginPage, SignUpPage } = require('../controllers/loginController');
const {adminController} = require('../controllers/mergeController')
const router = express.Router();



router.get('/', loginPage)
router.post('/login', adminController.login);


router.get('/sign_up', SignUpPage)

router.post('/register_account', adminController.signUp)



module.exports = router;