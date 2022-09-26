const deleteModel=require('../models/delete')

async function deleteImg(req,res){
    try{
        const id=req.query.id
        const deleteImg= await deleteModel.deleteImg(id)
        console.log(deleteImg);
        return res.status(200).json({success:true,deleteImg:deleteImg})   
    }
    catch(err){
        console.log(err);
        return res.status(500).json({success:'error'})
    }
}

module.exports={deleteImg}
