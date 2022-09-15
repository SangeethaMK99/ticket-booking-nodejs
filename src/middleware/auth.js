var jwt = require('jsonwebtoken');

function verifyToken(req,res,next){
    const auth=req.headers.authorization
    if(!auth){
        res.status(401).send({authentication:false,error:"no token provided"})  
    }
    else{
        let token=auth.split(" ").pop()
        jwt.verify(token,"secretkey",(err)=>{
            if(err){
                res.status(500).send({authentication:false,error:"authentication failed"})  
            }
            else{
                next()
            }
        })
    }
}
module.exports={verifyToken}
