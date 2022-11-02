const editBusModel=require('../models/editBus')

async function editBus(req,res){
    try{
        const id=req.body.id
        console.log(id);
        const destination=req.body.destination
        console.log("..............",destination);
        const date=req.body.date
        console.log(date);
        const time=req.body.time
        console.log(time);
        const data= await editBusModel.editBus(id,destination,date,time)
        return res.status(200).json({success:true,data:data})   
    }
    catch(err){
        console.log(err);
        return res.status(500).json({success:"error"})
    }
}
module.exports={editBus}
