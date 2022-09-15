
const imgModel=require('../models/img')

async function imageSlider(req,res){
    try{
    const img= await imgModel.img()
    console.log(img);
    const im ="http://localhost:8000/upload/images/"
    const imgs=img.map((ele)=>im + ele.name)
    return res.status(200).json({status:true,message:"images is loaded", imgs:imgs})   
}
    catch(err){
        console.log(err)
        return res.status(500).json({message:"error"})
    }
}
module.exports={imageSlider}








































































































































































































































// const img=require('../upload/images')

// async function images(req,res){
//     try{
//     // console.log(data);
//     return res.status(200).json({status:true,message:"images loaded",img:img})
// }
//     catch(err){
//         console.log(err);
//         return res.status(500).json({message:"error"})
//     }
// }

// module.exports={images}
