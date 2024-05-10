const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },

    author:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        
    },
    description:{
        type:String,
        required:true
    }

})


const bookmodel = mongoose.model("bookmodel",bookSchema)
module.exports = {bookmodel}