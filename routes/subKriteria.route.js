import express from 'express';
import { createSubKriteria, deleteSubKriteria, getDetailKriteria, getKriteriaAndSubKriteria, getAllSubKriteria, getEditSubKriteriaPage, updateSubKriteria } from '../controllers/subKriteria.controller.js';
import protect from '../config/auth/protect.js';

const router = express.Router();

// router.get('/subKriteria/:id', protect, getDetailKriteria);
router.post('/subKriteria', protect, createSubKriteria);
router.delete('/subKriteria_delete/:id', deleteSubKriteria);

router.get('/subKriteria/:id', getKriteriaAndSubKriteria)


router.get('/subkriteria', getAllSubKriteria);


// Route to get sub_kriteria by ID for editing
router.get('/subKriteria/edit/:id', getEditSubKriteriaPage);
router.post('/subKriteria/update/:id', updateSubKriteria);






// Route to update sub_kriteria
// router.put('/sub-kriteria/:id', updateSubKriteria);


// router.get('/kriteria/:id', protect,getKriteriaById);

// router.get('/add_kriteria', protect, getAddKriteriaPage);
// router.get('/edit_kriteria/:id_kriteria', protect, putEditKriteria);
// router.post('/update_kriteria/:id_kriteria', putEditKriteria);

export default router;
