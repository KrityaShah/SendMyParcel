const express = require('express');
const app = express();
const router = require('./router/auth-router');

const PORT = 5000;

app.use("/api/auth", router)

app.get("/", (req, res)=>{
    res
    .status(200)
    .send("Welcome to Home")
})

app.listen(PORT, ()=>{
    console.log(`Server is running at: ${PORT}`);
    
})