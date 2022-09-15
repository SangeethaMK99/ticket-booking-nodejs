
const authModel=require('../models/auth')
var jwt = require('jsonwebtoken');


async function signup(req,res){

    try{
    const username=req.body.username
    console.log(req.body.username);
    const email=req.body.email
    const password=req.body.password
    if(!username){

        res.status(200).send({status:false, message:"invalid username"})
    }
    if(!email){

        res.status(200).send({status:false, message:"invalid email"})
    }
    if(!password){

        res.status(200).send({status:false, message:"invalid password"})
    }
    if(username!="" && email!="" && password!=""){
        await authModel.signup(username,email,password)
        return res.status(200).json({status:true, message:"user successfully registered "})
    }
}
    catch(err){
        console.log(err);
        return res.status(500).json({message:"error"})
    }

}

async function signin(req,res){
    try{
    const username=req.body.username
    // console.log(req.body.username);
    const password=req.body.password
    
    if(username=="" || password==""){
        return res.status(200).send({status:false, message:"invalid inputs"})
    }
    else{
    const login= await authModel.signin(username,password)
    // console.log(login);
    const dbusername= login[0]
    if(login.length!=0){
        const token = jwt.sign({username:dbusername},'secretkey');
        return res.status(200).json({status:true, message:"user successfully logged",token:token,login:login})   
    }
    else{
        return res.status(400).json({status:false, message:"user not registerd"})
    }
    }   
}
    catch(err){
        console.log(err);
        return res.status(500).json({message:"error"})
    }
}
 module.exports={signup,signin}





























































































































































































































































