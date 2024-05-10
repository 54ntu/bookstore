const mongoose = require('mongoose')

const connectdb = async()=>{
   try {
     const connectInstance = await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
    // const connectInstance = await mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
     console.log("database is connected successfully!!!!")
   } catch (error) {
        console.log('error connecting to the server',error);
        throw error;
   }
}


module.exports= {connectdb}