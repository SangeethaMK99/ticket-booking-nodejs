

const contentModel=require('../models/content')

async function places(req,res){
    try{
    const data= await contentModel.placeCard()
    // console.log(data);
    return res.status(200).json({status:true,message:"user successfully logged",data:data})   
}
    catch(err){
        console.log(err);
        return res.status(500).json({message:"error"})
    }
}





module.exports={places}
