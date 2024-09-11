import { getTOPSISResult } from '../controllers/demo.controller.js';
import * as perhitunganController from '../controllers/perhitungan.controller.js';
import express from 'express';

const router = express.Router();


router.get('/main_topsis', perhitunganController.MainPerhitunganPage);
router.get('/normalized-matrix', perhitunganController.normalizedMatrixPage);
router.get('/weighted-normalized-matrix', perhitunganController.weightedNormalizedMatrixPage)

router.get('/demo', getTOPSISResult)
// router.delete('/perhitungan')

export default router;