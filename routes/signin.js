const express=require('express');
const router=express.Router();

const signinController=require('../controllers/signin_controller');

router.post('/',signinController.signin);



module.exports=router;
