const express=require('express');
const dotenv=require('dotenv').config();
const contactRoute=require('./routes/contactRoutes')
const app=express();
const port=process.env.PORT||8000;

app.use(express.json());
app.use('/api/contacts',contactRoute);

app.listen(port,(req,res)=>{
    console.log(`server running on port ${port}`);
})