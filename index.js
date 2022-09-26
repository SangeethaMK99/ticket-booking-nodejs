const express=require('express')
const app= express()
app.use(express.json())
// const cors=require('cors')
// app.use(cors())

app.use((req,res,next)=>{

res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-methods", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Allow-Headers","content-type,Authorization");
next();
})

const Route=require('../ticket_booking/src/routes/route')
app.use('/user', Route)

app.use(express.static('public')); 
app.use('/imgs', express.static('public/upload/images'));



app.listen(8000,()=>{
    console.log("app started");
});

