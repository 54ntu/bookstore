const mongoose = require('mongoose')
const {bookmodel} = require('../models/book.models')

const addbook = async function(req, res){
  const { title, genre, author, description } = req.body;
  // console.log("file we are getting from frontend",req.file?.filename);
  const image = req.file?.filename;  
  try {
    const data = await bookmodel.create({
      title,
      genre,
      author,
      description,
      image: image,
    });
    if (data) {
      res.status(200).json({
        success: true,
        data,
        message: "data submitted successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "something went wrong!!!!!!",
      });
    }
  } catch (error) {
    console.log("error submitting data", error);
    throw error;
  }
};


const getBook = async(req,res)=>{
   try {
     const testdata = await bookmodel.find()
    //  console.log(testdata)
     for(let d of testdata){
      // console.log("d values are : ",d);
      d.image = "http://localhost:4000/temp/"+d.image;
     }
     if (testdata) {
       res.status(200).json({
         success: true,
         testdata,
         message: "here is your data!!",
       });
     } else {
       console.log("error fetching data");
     }
     
   } catch (error) {
    console.log('error fetching data ', error);
    res.status(500).json({
        success:false,
        message:"error fetching data"
    })
   }
}


const getBookById= async(req,res)=>{
  
  try {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }
    if(id){
      const data= await bookmodel.findById(id);
      console.log("data we are getting", data)
      if(data){
        return res.status(200).json({
          success:true,
          data,
          message:"data fetched successfully...."
        })
      }else{
        return res.status(404).json({
          success:false,
          message:"books not found"
        })
      }
    }
    else{
      return res.json({
        success:false,
        message:'id is not provided'
      })
    }
    
  } catch (error) {
    console.error("error fetching book by id",error);
    return res.status(500).json({
      success:false,
      message:'interval server error'
    })
    
  }  

}  


const updateBook = async(req,res)=>{
  try {
    const {id} = req.params;
    if(id){
     const data= await bookmodel.findByIdAndUpdate(
        id,
        {
          $set:{
           ...req.body
          }
        },{
          new:true
        }
      );

      if(data){
        return res.status(200).json({
          success:true,
          data,
          message:"data updated successfully.."
        })
      }
      else{
        return res.status(500).json({
          success:false,
          message:'error updating data'
        })
      }


    }else{
      return res.json({success:false,
        message:"id not given"
      })
    }
    
  } catch (error) {
    console.log('error updating data',error);
    return res.status(500).json({
      success:false,
      message:"error updating data....."
    })
  }

}


const deleteBook= async(req,res)=>{
try {
    const {id}= req.params;
    const data= await bookmodel.findByIdAndDelete(id);
    if(data){
      return res.status(200).json({
        success:true,
        message:"data deleted successfully"
      })
    }
    else{
      return res.status(500).json({
        success:false,
        message:"error deleting data || data  not found"
      })
    }
} catch (error) {
  console.log('errror while deleting data',error);
  return res.status(500).json({
    success:false,
    message:"error on deleting data"
  })
  
}

}


const searchBook=async(req,res)=>{
  
  
    // console.log(req.query);
  try {
      const {q}=req.query;
      // console.log(q)
      const data =await bookmodel.find({
        $or:[
          {title:{$regex:q, $options: "i"}},
          {author:{$regex:q, $options: "i"}}
        ]
      });
  
      // console.log("data : ",data);
      if(data.length ===0){
        return res.status(404).json({
          success:false,
          message:'data not found....'
        })
      }else{
        return res.status(200).json({
          success:true,
          data,
          message:"data found"
        })
      }

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:" internal server error..."
    })
    
  } 
  
}

module.exports = {
  addbook,
  getBook,
  getBookById,
  updateBook,
  deleteBook,
  searchBook,
};