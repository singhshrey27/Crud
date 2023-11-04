const express = require('express')
const router=require('./router.js')
const mongoose=require("mongoose")
const cors=require('cors')
require('dotenv').config()

const PORT=8000;
const app=express();




// for connection to mongodb

mongoose
.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("Connnected to the Database");
})
.catch((err)=>{
    console.log(err);
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);




