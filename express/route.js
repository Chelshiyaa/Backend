const express= require('express');
const app=express();

app.get('/',function(req,res){
    res.send("Hey guys this is home page");
});

app.get('/about',function(req,res){
    res.send("Hey guys this is about page");
});

// this is a wild card like anything we will type in url we will get this and we always write this at the end of the code
app.get('*',function(req,res){
    res.send("If nothing works, then i will ");
});
app.listen(3000);