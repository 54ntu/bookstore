import React, { useState } from 'react'
import axios from 'axios'
import toast, { useToasterStore } from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const Addbook = () => {
  const [formdata,setFormdata] = useState({});
  const [imagedata,setImagedata] = useState();
  const navigate = useNavigate();

  const handleChange =(e)=>{
    setFormdata({...formdata, [e.target.name]: e.target.value});
  }

  const subitbook=async(e)=>{
    e.preventDefault();
   const formData = new FormData();
   formData.append('title',formdata.title);
   formData.append('author',formdata.author);
   formData.append('genre',formdata.genre);
   formData.append('description',formdata.description);
   formData.append('image',imagedata);
  //   console.log(formData)
    const response=await axios.post('http://127.0.0.1:4000/book/v1/add',formData );

    if(response){
      toast.success('data added successfully')
      console.log(response.data);
      navigate('/');
      

    }else{
      toast.error('something went wrong!!!')
    }
    
  }

  return (
    <div style={{height:"300px",width:"300px", margin:'0px auto', background:'#ccc', borderRadius:"5px", boxShadow:'10px 10px 20px #ccc'}}>
      <h2 style={{display:'flex', justifyContent:'center'}}>Add book</h2>
      <hr></hr>
      <form style={{display:'flex', flexDirection:'column', padding:'10px'}} onSubmit={subitbook} encType='multipart/form-data'>
          Name
          <input type="text" style={{height:"15px",width:"100%",border:"1px solid #ccc", boxSizing:"border-box"}} name='title' onChange={handleChange}/>
          Author
          <input type="text" style={{height:"15px",width:"100%",border:"1px solid #ccc", boxSizing:"border-box"}} name='author'  onChange={handleChange}/>
          Genre
          <input type="text" style={{height:"15px",width:"100%",border:"1px solid #ccc", boxSizing:"border-box"}} name='genre' onChange={handleChange}/>
          Description
          <textarea name='description' onChange={handleChange} style={{marginBottom:"10px"}}></textarea>
          <input type='file' style={{marginBottom:'10px'}} name="image" onChange={(e)=>setImagedata(e.target.files[0])}/>
          <input type='submit' style={{cursor:"pointer"}} value="submit"/>
      </form>
    </div>
  )
}

export default Addbook