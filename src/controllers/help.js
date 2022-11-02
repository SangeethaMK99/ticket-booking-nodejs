const customerHelpModel=require('../models/help')


async function passengerHelp(req,res){

    try{
    const name=req.body.name
    console.log(req.body.name);
    const phone=req.body.phone
    if(name!="" && phone!="" ){
        const data=await customerHelpModel.passengerHelp(name,phone)
        return res.status(200).json({status:true, message:"customer help successfully registered ",data:data})
    }
}
    catch(err){
        console.log(err);
        return res.status(500).json({message:"error"})
    }

}
module.exports={passengerHelp}