const uploadModel=require('../models/upload')

async function upload(req,res){
    try{
        const img=req.file.originalname
        const upload= await uploadModel.upload(img)
        return res.status(200).json({success:true})   
}
    catch(err){
        console.log(err);
        return res.status(500).json({success:"error"})
    }
}



module.exports={upload}
