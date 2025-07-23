const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors());//if we want ki sara data share ho or agar hume chiea ki sara na ho ke ekh hi route wala ho to vo apan route mai likh dete hai url ke bad 

//jaise ye kia hai 
app.get('/home',cors(),function(req,res,next){
    res.send("heelo this is home page");
})

app.listen(3000);

//cors hum use islye krte hai jaise man lo hume ekh website ka data dusre website mai chaiea to ye chz humara browser support nhi krta security reasons ke vjh se to hume btana pdhta hai uss website ke server ko jiss se data lere hai to vo cors enable kr deta hai data shareing allow krne ke lie 