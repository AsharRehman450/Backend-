 import express from 'express'
import { signupcontroller } from '../controller/signupcontroller.js'
import { logincontroller } from '../controller/logincontroller.js'
import { getalldata } from '../controller/getalldata.js';
// import { middlewear } from '../middlewear/middlewear.js';
import { tokenVerification } from '../middlewear/middlewear.js';

const router = express.Router()

router.route("/api/signup").post(signupcontroller);
router.route("/api/login").post(logincontroller);
router.route("/api/get").get(tokenVerification, getalldata);


export default router