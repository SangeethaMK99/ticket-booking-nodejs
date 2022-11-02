const busViewModel=require('../models/busView')



async function busView(req,res){
    try{
    const id=req.query.id
    console.log("id",id);
    const data= await busViewModel.busView(id)
    console.log(data);
    return res.status(200).json({status:true,message:" bus details",data:data})     
}
    catch(err){
        console.log(err);
        return res.status(500).json({message:"error"})
    }
}
module.exports={busView}

