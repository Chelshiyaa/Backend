const express=require('express');
const app=express();
const db=require('./config/mongoose');
const userModel= require("./models/user");


// app.get('/',(req,res)=>{
//     res.send("Hello World");
// });

app.get('/create',async function(req,res,next){
    let createduser = await userModel.create({
        username:"chelshiya01",
        name:"chelshiya",
        email:"chelshiya@example.com",
        password:"password123"
    })
    console.log("user created");
    res.send(createduser);
})

app.listen(3000);