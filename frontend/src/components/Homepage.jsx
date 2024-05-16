import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Homepage = () => {
  const [booklist,setbooklist]=useState([])

  const fetchbook =async()=>{
    const response = await axios.get('http://127.0.0.1:4000/book/v1');
    // console.log(response.data.testdata);
    setbooklist(response.data.testdata);
  }


  useEffect(()=>{
    fetchbook();
  },[]);


  return (
    <div>
      {
        booklist.map((book)=>{
          console.log(book)
          return(
            <div key={book._id}>
              <img src={book.image} alt={`image ${book._id}`}/>
              {book.title} 
            </div>
          )
        })
      }

    </div>
  )
}

export default Homepage