const passengerModel=require('../models/passenger')


async function passenger(req,res){

    try{
    const name=req.body.name
    console.log(req.body.name,"name");
    const email=req.body.email
    const phone=req.body.phone
    const startPoint=req.body.startPoint
    const stopPoint=req.body.stopPoint
    console.log(stopPoint);
    const busName=req.body.busName
    console.log(busName);
    const date=req.body.busDate
    console.log(date);
    const time=req.body.busTime
    const fare=req.body.fare
    const payment=req.body.payment
    console.log(time);
    
    if(name!="" && email!="" && phone!="" && startPoint!="" && stopPoint!="" && busName!="" && date!="" && time!="" && fare!=""){
           const data= await passengerModel.passenger(name,email,phone,startPoint,stopPoint,busName,date,time,fare,payment)
            console.log("iddata",data);
            return res.status(200).json({status:true, message:"user successfully booked",data:data})
            
    }
}
    catch(err){
        console.log(err);
        return res.status(500).json({message:"error"})
    }

}
module.exports={passenger}
