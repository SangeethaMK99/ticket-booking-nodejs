const express=require('express')
const app= express()
app.use(express.json())
const cors=require('cors')
app.use(cors())


const Route=require('../ticket_booking/src/routes/route')

app.use('/user', Route)

app.use(express.static('public')); 



app.listen(8000,()=>{
    console.log("app started");
});

