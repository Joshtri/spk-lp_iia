const express = require('express');
const {agamaController, pekerjaanController, tindakPidanaController} = require('../controllers/mergeController')
const protect = require('../auth/protect');
// const { kriteriaPage, addKriteriaPage } = require('../controllers/kriteriaController');
const router = express.Router();



/* ROUTER UNTUK AGAMA */
router.get('/data_agama', agamaController.getPage)
// router.get('/add_kriteria', addKriteriaPage)


/* ROUTER UNTUK PEKERJAAN */
router.get('/data_pekerjaan', protect, pekerjaanController.getPage);
// Rute untuk menambah data pekerjaan
router.post('/post_pekerjaan', protect, pekerjaanController.create);


//route untuk mengedit data pekerjaan
router.post('/update_pekerjaan', pekerjaanController.update)
// Tentukan rute DELETE untuk menghapus data pekerjaan berdasarkan ID
router.delete('/delete_pekerjaan/:id_pekerjaan', pekerjaanController.delete);



router.get('/data_tindak_pidana', tindakPidanaController.getPage);

router.post('/post_tindak_pidana', tindakPidanaController.create);

router.delete('/delete_tindak_pidana/:id_tindak_pidana', tindakPidanaController.delete);

router.post('/update_tindak_pidana', tindakPidanaController.update);




module.exports = router;