import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Homepage = () => {
  const navigate = useNavigate();
  const [booklist,setbooklist]=useState([])
  const [tempbooklist,setTempBooklist] = useState([]);
  const [searchText, setSearchText] = useState('');

  const fetchbook =async()=>{
    const response = await axios.get('http://127.0.0.1:4000/book/v1');
    // console.log(response.data.testdata);
    setbooklist(response.data.testdata);
    setTempBooklist(response.data.testdata);
  }
  useEffect(()=>{
    fetchbook();
  },[]);


  const searchBook=async()=>{
    const response= await axios.get(`http://127.0.0.1:4000/book/v1/searchbook/all?q=${searchText}`);
    // console.log(response.data);
    setbooklist(response.data.data);
  }

  useEffect(()=>{
    if(searchText){
      searchBook();
    } else{
      setbooklist(tempbooklist);
    }
      
  },[searchText]);


  return (
    <>
    <center >
      <input type='text' onChange={(e)=>setSearchText(e.target.value)} placeholder='Search books............' style={{height:'10px',margin:'10px',padding:'5px', border:'1px solid #ccc', borderRadius:'2px', width:'50%', marginBottom:'10px'}}></input>
    </center>
        <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center"}} className='image-div'>
          {
           booklist.length>0?
            booklist.map((book)=>{
              return(
                <div key={book._id} style={{
                  display:'flex',
                  flexDirection:'column',
                  padding:"2px",
                  borderRadius:'5px',
                  boxShadow:"0px 0px 5px #ccc",
                  marginLeft:'5px',
                  alignItems:"center",
                  marginBottom:"10px",
                  cursor:"pointer",
                  
                  }}

                  onClick={()=>{
                    navigate('/bookdetail',{
                      state:{
                        book,
                      }
                    })
                  }}
                  >
                  <img src={book.image} alt="image" style={{height:'50px', width:"50px", objectFit:'contain'}}/>
                <p> {book.title} </p>
                </div>
              )
            }):"books not found"    
           
          }

        </div>
    
    </>
  )
}

export default Homepage