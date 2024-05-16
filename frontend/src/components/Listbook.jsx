import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaTrashAlt } from "react-icons/fa";
import toast from 'react-hot-toast';

const Listbook = () => {
    const [booklist, setbooklist] = useState([]);

    const getbook = async()=>{
        const response = await axios.get('http://127.0.0.1:4000/book/v1');
        // console.log(response.data.testdata);
        setbooklist(response.data.testdata)

    }


    useEffect(()=>{
        getbook();
    },[]);


    const deleteBook=async(id)=>{
       const res= window.confirm("Do you want to delete book??")
       if(res){

        try{

         const response=  await axios.delete(`http://127.0.0.1:4000/book/v1/deletebook/${id}`);
        //  console.log(response.data);
        if(response.data.success){
            const newBookList = booklist.filter((book)=>book._id !=id);
            setbooklist(newBookList);
            toast.success('data deleted successfully....')
        }
        else{
            toast.error('error on deleting data!!');
        }

        }
        catch(error){
            console.log('error while deleting data...',error)
            toast.error('error while deleting data: ',error)
        }

    }
    }


  return (
    <center>
        {
            booklist.map((book)=>{  
                return(
                    <div key={book._id} 
                    style={{
                        boxShadow:'0px 0px 5px  #ccc',
                        padding:"5px",
                        width:'50%',
                        color:'green',
                        textAlign:'start',
                        margin:'10px',
                        display:'flex',
                        justifyContent:'space-between'


                    }}
                    
                    
                    >
                        {book.title}

                        <FaTrashAlt style={{cursor:'pointer',color:'red'}} onClick={()=>{
                            deleteBook(book._id)
                        }}/>
                    </div>
                )
            })
        }

    </center>
  )
}

export default Listbook