import { getTOPSISResult } from '../controllers/demo.controller.js';
import * as perhitunganController from '../controllers/perhitungan.controller.js';
import express from 'express';


const router = express.Router();


router.get('/main_topsis', perhitunganController.MainPerhitunganPage);
router.get('/hasil_perhitungan_success', perhitunganController.hasilPerhitunganSuccessPage);
router.get('/normalized-matrix', perhitunganController.normalizedMatrixPage);
router.post('/simpan-perhitungan', perhitunganController.saveHasilPerhitungan)
// router.get('/weighted-normalized-matrix', perhitunganController.weightedNormalizedMatrixPage)
router.get('/data/hasil_perhitungan', perhitunganController.hasilPerhitunganPage)
router.post("/data/delete_hasil_perhitungan/:id", perhitunganController.deleteHasilPerhitungan);

router.get('/demo', getTOPSISResult)
// router.delete('/perhitungan')


router.get('/data/export_pdf', perhitunganController.exportPDFByPeriode);


export default router;