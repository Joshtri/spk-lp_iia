import express from 'express';
import * as userController from '../controllers/user.controller.js';
const router = express.Router();

// import {adminController} from'../controllers/mergeController';
import protect  from '../config/auth/protect.js';


router.get('/user',protect, userController.userPage);

// router.post('/post_admin',protect, adminController.create);
// router.delete('/delete_admin/:id_admin', adminController.delete);






export default router