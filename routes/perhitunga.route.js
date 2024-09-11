import { addPenilaianPage, createPenilaian, penilaianPage } from '../controllers/penilaian.controller.js';
import express from 'express';

const router = express.Router();


router.get('/penilaian', penilaianPage);
router.get('/add_penilaian', addPenilaianPage);
router.post('/penilaian', createPenilaian);

// router.get('/demo', penilaianPage)

export default router;