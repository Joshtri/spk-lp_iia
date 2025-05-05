import express from 'express';
import * as fileDistribusiController from '../controllers/fileDistribusi.controller.js';
import protect from '../config/auth/protect.js';
import FileDistribusi from '../models/file_distribusi.model.js';
 

const router = express.Router();

router.get('/sspn-spk',  fileDistribusiController.fileDistribusiPage);
router.post('/file-distribusi/upload', fileDistribusiController.uploadFileDistribusi);
router.get('/file-distribusi/view/:id', async (req, res) => {
    const file = await FileDistribusi.findByPk(req.params.id);
    if (!file) return res.status(404).send('File tidak ditemukan');
  
    const buffer = Buffer.from(file.file, 'base64');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${file.judul_file}.pdf"`);
    res.send(buffer);
  });


export default router;