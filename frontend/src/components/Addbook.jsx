import React, { useState } from 'react'
import axios from 'axios'

const Addbook = () => {
  const [formdata,setFormdata] = useState({});
  const [imagedata,setImagedata] = useState();

  const handleChange =(e)=>{
    setFormdata({...formdata, [e.target.name]:e.target.value});
  }


  const subitbook=async(e)=>{
    e.preventDefault();
    const response=await axios.post('http://127.0.0.1:4000/book/v1/add',{
      ...formdata,
      image:imagedata
    })
    console.log(response)



  }

  return (
    <div className='addbook'>
      <h2 style={{display:'flex', justifyContent:'center'}}>Add book</h2>
      <hr></hr>
      <form style={{display:'flex', flexDirection:'column'}} onSubmit={subitbook} encType='multipart/form-data'>
          Name
          <input type="text" className="title" name='title' onChange={handleChange}/>
          Author
          <input type="text" className="author" name='author'  onChange={handleChange}/>
          Genre
          <input type="text" className="genre" name='genre' onChange={handleChange}/>
          Description
          <textarea name='description' onChange={handleChange}></textarea>
          <input type='file' name='image' onChange={(e)=>setImagedata(e.target.value)}/>
          <input type='submit' value="submit"/>
      </form>
    </div>
  )
}

export default Addbook