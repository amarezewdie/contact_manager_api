const express=require('express');
const dotenv=require('dotenv').config();

const app=express();
const port=process.env.PORT||8000;

app.get('/',(req,res)=>{
    res.send('testing');
})

app.listen(port,(req,res)=>{
    console.log(`server running on port ${port}`);
})