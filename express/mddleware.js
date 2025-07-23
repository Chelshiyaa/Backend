const express= require('express');
const app=express();

app.use(function(req,res,next){
    console.log("bhai log ye middleware hai");
    next();//ye lgaya jata hai taki niche wale code ko execute kar sake
})

app.get('/',function(req,res){
    res.send("Hey guys this is home page");
});

app.get('/about',function(req,res){
    res.send("Hey guys this is about page");
});

app.listen(3000);