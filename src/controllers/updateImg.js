const uploadModel=require('../models/updateImg')

async function updateImg(req,res){
    try{
        const img=req.file.originalname
        const id=req.query.id
        const update= await uploadModel.update(img,id)
        return res.status(200).json({success:true})   
    }
    catch(err){
        console.log(err);
        return res.status(500).json({success:"error"})
    }
}
module.exports={updateImg}
