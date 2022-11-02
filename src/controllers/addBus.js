const addBusModel=require('../models/addBus')

async function addBus(req,res){
    try{
        const name=req.body.name
        const number=req.body.number
        const seats=req.body.seats
        const category=req.body.category
        const startPoint=req.body.startPoint
        const destination=req.body.destination
        const stopPoint=req.body.stopPoint
        const fare=req.body.fare
        const date=req.body.date
        const time=req.body.time
        const availableSeats=req.body.availableSeats
        console.log("seats",availableSeats);
        const data= await addBusModel.addBus(name,number,seats,category,startPoint,destination,stopPoint,fare,date,time,availableSeats)
        return res.status(200).json({success:true})   
}
    catch(err){
        console.log(err);
        return res.status(500).json({success:"error"})
    }
}

module.exports={addBus}
