// cookie is used tp save data in browser
// session is used to save data on server side

const express=require('express');
const app=express();
const expressSession=require('express-session');

app.use(expressSession({
    secret:"random stuff",
    resave:false,
    saveUninitialized:false
}));

app.get("/create",function(req,res,next){
    req.session.chinu=true;
    res.send("created");
});

app.get("/check",function(req,res,next){
    console.log(req.session.chinu);
});


app.listen(3000);