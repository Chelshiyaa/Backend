// dynamic routing means that the route is determined at runtime like a REST API
const express = require('express');
const app = express();

//whenever we want to make a dynamic route we will add : in front of it 
app.get('/profile/:username',function(req,res){
    res.send(`this is ${req.params.username}'s page`);
});

app.listen(3000);
