const busModel=require('../models/bus')

async function bus(req,res){
    try{
    const data= await busModel.bus()
    console.log(data);
    return res.status(200).json({status:true,message:"bus details added", data:data})   
}
    catch(err){
        console.log(err)
        return res.status(500).json({message:"error"})
    }
}
 
module.exports={bus}




