const express=require('express');
const dotenv=require('dotenv').config();
const contactRoute=require('./routes/contactRoutes')
const errorHandler=require('./middleWare/errorHandler');
const connectDb = require('./db/conectDb');
const app=express();
const port=process.env.PORT||8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/contacts',contactRoute);

app.use(errorHandler)
app.listen(port,(req,res)=>{
    connectDb();
    console.log(`server running on port ${port}`);
})


