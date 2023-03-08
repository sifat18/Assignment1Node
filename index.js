const express=require('express');
const app=express();
const cors=require('cors');
const port=5000;
const userRoute=require('./routes/v1/user.route')


app.use(cors())
app.use(express.json())
app.use('/user',userRoute)

app.use('/',(req,res)=>{
    res.send('deployed')
})
app.listen(port,()=>{
    console.log('running on port 5000')
})