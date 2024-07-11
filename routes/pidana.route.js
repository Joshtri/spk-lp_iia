import express from 'express';
import * as pidanaController from '../controllers/pidana.controller.js';
const router = express.Router();

// import {adminController} from'../controllers/mergeController';
import protect  from '../config/auth/protect.js';


router.get('/pidana',protect, pidanaController.pidanaPage);

router.post('/pidana', protect, pidanaController.createTindakPidana);

router.delete('/pidana/:id', protect, pidanaController.deleteTindakPidana);
router.post('/update_pidana', pidanaController.updateTindakPidana);




export default router