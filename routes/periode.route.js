import express from 'express';
import { createPeriode, deletePeriode, periodePage, updatePeriode } from '../controllers/periode.controller.js';

const router = express.Router();


router.get('/periode', periodePage);
router.post('/periode', createPeriode)
router.post('/update_periode', updatePeriode);
router.delete('/periode/:id_periode', deletePeriode);



export default router;