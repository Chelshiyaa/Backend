const express= require('express');
const app=express();

app.get('/',function(req,res){
    res.send("Hey guys this is home page");
});

app.get('/about',function(req,res){
    res.send("Hey guys this is about page");
});

app.listen(3000);