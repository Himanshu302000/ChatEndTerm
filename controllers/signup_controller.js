const User=require('../models/user');
module.exports.signup=function(req,res){
    let password=req.body.password;
    let confirm_password=req.body.confirm_password;
    console.log(password);
    if(password!=confirm_password)
    {
        return res.render('signup');
    }
    User.find({email:req.body.email},function(err,user){
        if(err)
        {
            console.log("error exist in finding tge user");
            return;
        }
        if(user.length)
        {
            return res.render('signup');
        }

    })
     User.create({
         email:req.body.email,
         name:req.body.name,
         password:req.body.password
     },function(err,user){
        if(err)
        {
            console.log("error in creating");
            return;
         }
         return res.render('signin');
     })

}