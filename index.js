const express = require("express")

const app =express();


// HTTP METHODS
// GET(Read) , POST(Create) , PUT(Update), DELETE(Delete)

app.get('/',(req,res)=>{
    res.send("Hello Express.js World")
})

app.get('/profile',(req,res)=>{
    res.send("Hello Express.js Profile GET World")
})

app.post('/profile',(req,res)=>{
    res.send("Hello Express.js Profile POST World")
})

app.listen(3000, ()=>{
    console.log("Our First Express App is running in localhost:3000")
})



// HTTP CODES
// 10x = Informational
// 20x = Success
// 30x = Redirection 
// 40x = Client side Error
// 50x = Server side Error