import express from 'express';
import { createUser, loginPage, loginUser, SignUpPage} from '../controllers/login.controller.js';
// cnonst {adminController} = require('../controllers/mergeController')
const router = express.Router();



router.get('/', loginPage)
router.post('/login', loginUser);


router.get('/sign_up', SignUpPage)

router.post('/register_account', createUser)



export default router;