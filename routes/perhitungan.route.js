import * as perhitunganController from '../controllers/perhitungan.controller.js';
import express from 'express';

const router = express.Router();


router.get('/perhitungan_topsis', perhitunganController.perhitunganPage);

export default router;