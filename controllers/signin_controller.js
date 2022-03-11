const User=require('../models/user');
module.exports.signin=function(req,res){
    let email=req.body.email;
    console.log(req.body.email);
    // User.create({
    //     email:req.body.email,
    //     name:req.body.name,
    //     password:req.body.password
    // },function(err,user){
    //     if(err)
    //     {
    //         console.log("error in creating");
    //         return;
    //     }
    //     return res.send("Hello");
    // })
    User.find({email:email},function(err,user){
        if(err){
            console.log("error in finding the user");
            return;
        }
        console.log(user.length);
        if(user.length)
        {
            console.log(user);
            res.render('chating',{
                email:req.body.email
            });
        }
        else
        {
            return res.render('signup');
        }
    })

}