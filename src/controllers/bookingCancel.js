const bookingCancelModel=require('../models/bookingCancel')
const dateData = require('date-and-time')


async function cancelTicket(req,res){
    try{
        const dateInfo=req.body.date
        const date=dateData.format((new Date(dateInfo)),'YYYY-MM-DD');
        const destination=req.body.destination
        const id=req.body.id
        const bookingCancel= await bookingCancelModel.bookingCancel(date,destination,id)
        console.log(bookingCancel);
        return res.status(200).json({success:true,message:"booking cancelled",bookingCancel:bookingCancel})   
    }
    catch(err){
        console.log(err);
        return res.status(500).json({success:'error'})
    }
}

module.exports={cancelTicket}
