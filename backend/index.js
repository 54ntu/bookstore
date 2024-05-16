require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { connectdb } = require('./src/db_config/db');
const { router } = require('./src/routes/book.routes');
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use(express.static('public'));


//path for the routes
app.use('/book/v1',router)


connectdb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening at port ${process.env.PORT} `)
    })
})
.catch((error)=>{
    console.log('error on connecting db',error);
    process.exit(1);
})