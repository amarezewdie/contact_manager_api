const mongoose=require('mongoose');
const connectDb=async()=>{
    try {
        const conn=await mongoose.connect(process.env.mongo_url);
        console.log(`mongoDb connected on host ${conn.connection.host}  `)
    } catch (error) {
         console.log(error)
         process.exit(1)
    }
   
}


module.exports=connectDb;