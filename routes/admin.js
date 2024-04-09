const express = require('express');
// const { adminPage } = require('../controllers/adminController');
const router = express.Router();

const {adminController} = require('../controllers/mergeController')
const protect = require('../auth/protect');


router.get('/data_admin', adminController.getPage);

router.post('/post_admin', adminController.create);
router.delete('/delete_admin/:id_admin', adminController.delete);






module.exports = router;