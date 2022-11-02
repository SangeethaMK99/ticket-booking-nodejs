const ticketModel=require('../models/viewTickets')

async function ViewTickets(req,res){
    try{
        const bookPassengerId=req.query.bookPassengerId
        console.log("bookid",bookPassengerId);

    const data= await ticketModel.ViewTickets(bookPassengerId)
    // console.log( "data for tickets",data);
    return res.status(200).json({status:true, message:"passenger booked", data:data})   
}
    catch(err){
        console.log(err);
        return res.status(500).json({message:"error"})
    }
}

module.exports={ViewTickets}
