import { addPenilaianPage, createPenilaian, deletePenilaian, destroyAllPenilaian, editPenilaianPage, penilaianPage, updatePenilaian } from '../controllers/penilaian.controller.js';
import express from 'express';

const router = express.Router();


router.get('/penilaian', penilaianPage);
router.get('/add_penilaian', addPenilaianPage);
router.post('/penilaian', createPenilaian);

router.get('/demo', penilaianPage)

// Route to delete penilaian
router.post('/delete_penilaian/:id', deletePenilaian);

// Route to get the edit page
router.get('/edit_penilaian/:id', editPenilaianPage);

// Route to update penilaian
router.post('/update_penilaian', updatePenilaian);


router.post('/destroy_all_penilaian', destroyAllPenilaian);



export default router;