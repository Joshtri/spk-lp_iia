import express from 'express';
import * as userController from '../controllers/user.controller.js';
const router = express.Router();

// import {adminController} from'../controllers/mergeController';
// import  from '../config/auth/protect.js';


router.get('/user', userController.userPage);


// router.post('/post_admin', adminController.create);
// router.delete('/delete_admin/:id_admin', adminController.delete);
router.get('/detail_user/:id/detail',  userController.userDetailPage);

// Edit profil
router.put("/user/:id_user", userController.updateUser);
router.post('/post_user', userController.postUser); // ini sesuai dengan action di form EJS kamu

// Edit user (form dan proses)
router.get('/edit_user/:id/edit', userController.userEditPage);
router.post('/edit_user/:id/edit', userController.userEditSubmit);


router.get('/edit_user/:id/password',  userController.passwordPage);
// router.post('/update_password',  userController.changePassword);
router.post('/edit_user/:id/password', userController.changePassword);
router.post('/delete_user/:id', userController.deleteUser);



export default router