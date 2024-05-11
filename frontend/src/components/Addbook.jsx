import React from 'react'

const Addbook = () => {
  return (
    <form style={{display:'flex', flexDirection:'column'}}>
        Name
        <input type="text" className="title" name='title'/>
        Author
        <input type="text" className="author" name='author' />
        Genre
        <input type="text" className="genre" name='genre' />
        Description
        <textarea name='description'></textarea>
        <input type='file' name='image'/>

    </form>
  )
}

export default Addbook