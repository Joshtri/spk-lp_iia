import express from 'express';
// import {
//   narapidanaPage,
//   getNarapidanaDetailById,
//   createNarapidana,
//   deleteNarapidana,
//   updateNarapidana,
//   getPekerjaanList,
//   getTindakPidanaList
// } from '../controllers/narapidana.controller.js';

const router = express.Router();

import * as narapidanaController from '../controllers/narapidana.controller.js';
import protect from '../config/auth/protect.js';

// // Route to display the paginated list of narapidana
router.get('/narapidana', protect,narapidanaController.narapidanaPage);
router.get('/add_narapidana', protect,narapidanaController.addNarapidanaPage);

router.post('/narapidana', narapidanaController.createNarapidana);
router.delete('/narapidana/:id', narapidanaController.deleteNarapidana);
// Route untuk mendapatkan detail narapidana
router.get('/narapidana/:id', narapidanaController.getDetailNarapidana);


// Route to get the edit detail of a specific narapidana by ID
router.get('/edit_narapidana/:id', narapidanaController.getEditNarapidana);

// // Route to create a new narapidana

// // Route to delete a narapidana by ID

// // Route to update an existing narapidana by ID
// router.put('/data_narapidana/:id', updateNarapidana);

// // Route to get the list of all pekerjaan
// router.get('/pekerjaan', getPekerjaanList);

// // Route to get the list of all tindak pidana
// router.get('/tindak_pidana', getTindakPidanaList);

export default router;
