const searchBusModel=require('../models/searchBus')



async function searchBus(req,res){
    try{
    const startingPoint=req.body.starting_point
    const endPoint=req.body.destination
    const scheduledate=req.body.date
    console.log("start",startingPoint);
    console.log("end",endPoint);
    console.log("date",scheduledate);
    const data= await searchBusModel.searchBus(startingPoint,endPoint,scheduledate)
    console.log(data);
    return res.status(200).json({status:true,message:"available bus details",data:data})     
}
    catch(err){
        console.log(err);
        return res.status(500).json({message:"error"})
    }
}
module.exports={searchBus}

