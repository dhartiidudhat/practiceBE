const express = require('express')
require('dotenv').config()


const app = express();


app.get('/',(req, res)=>{
    res.send("Welcome to home Page !")
})

app.get('/twitter',(req, res)=>{
    res.send('Welcome to Twitter Page')
})

app.get('/login',(req,res)=>{
    res.send("<h1>login Page</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log("app listen on ", process.env.PORT);
})