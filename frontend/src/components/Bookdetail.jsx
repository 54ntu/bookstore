import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const Bookdetail = () => {
  const book = useLocation().state.book;
  console.log(book);
  return (
    <>
    <div style={{display:'flex', justifyContent:'center', margin:'20px'}} className='main-div'>
      <div className='imagediv'>
        <img src={book.image}></img>        
        </div>
      <div className='detail'>
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <h4>{book.genre}</h4>
        <p>{book.description}</p>
      </div>
      
  
    </div>
    <div style={{ background:'#ccc', alignContent:'center', textAlign:'center', padding:'10px'}}>
    <Link to='/' style={{textDecoration:'none',}}>GO BACK</Link>
      
    </div>
    </>
  )
}

export default Bookdetail