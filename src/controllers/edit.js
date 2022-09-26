const editModel=require('../models/edit')

async function edit(req,res){
    try{
        const id=req.query.id
        const img= await editModel.edit(id)
        console.log(edit);
        return res.status(200).json({success:true,img:img})   
    }
    catch(err){
        console.log(err);
        return res.status(500).json({success:'error'})
    }
}
module.exports={edit}
