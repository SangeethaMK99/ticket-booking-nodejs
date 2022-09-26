
const express= require('express')
const auth=require('../controllers/auth')
const content=require('../controllers/content')
const imgs=require('../controllers/img')
const mid=require('../middleware/auth')
const router= express.Router()
const uploadImg = require('../controllers/upload')
const upload=require('../middleware/upload')
const edit=require('../controllers/edit')
const updateImg=require('../controllers/updateImg')
const update=require('../middleware/update')
const deleteImg=require('../controllers/delete')

router.post('/signup',auth.signup)
router.post('/signin',auth.signin)
router.get('/places',mid.verifyToken,content.places)
router.get('/imgs',imgs.imageSlider)
router.post('/uploads', upload.upload.single('file'),uploadImg.upload)
router.get('/edit',edit.edit)
router.patch('/update', update.update.single('file'),updateImg.updateImg)
router.delete('/delete',deleteImg.deleteImg)









module.exports=router
