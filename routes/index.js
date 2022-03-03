const express=require('express');
const router=express.Router();

const signinController=require('../controllers/home');

router.get('/',signinController.home);
router.use('/signin',require('./signin'));
router.use('/signup',require('./signup'))



module.exports=router;
