import express from 'express';
import {
  createKriteria,
  deleteKriteria,
  getKriteriaById,
  kriteriaPage
} from '../controllers/kriteria.controller.js';
import protect from '../config/auth/protect.js';

const router = express.Router();

router.get('/kriteria', protect, kriteriaPage);
router.post('/kriteria', protect, createKriteria);
router.delete('/kriteria/:id', protect, deleteKriteria);
router.get('/kriteria/:id', protect,getKriteriaById);

// router.get('/add_kriteria', protect, getAddKriteriaPage);
// router.get('/edit_kriteria/:id_kriteria', protect, putEditKriteria);
// router.post('/update_kriteria/:id_kriteria', putEditKriteria);

export default router;
