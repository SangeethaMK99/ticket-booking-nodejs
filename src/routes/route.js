const express= require('express')
const auth=require('../controllers/auth')
const content=require('../controllers/content')
const imgs=require('../controllers/img')
const mid=require('../middleware/auth')
const router= express.Router()


router.post('/signup',auth.signup)
router.post('/signin',auth.signin)
router.get('/places',mid.verifyToken,content.places)
router.get('/imgs',imgs.imageSlider)
module.exports=router
