const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/testingdb');

const db=mongoose.connection;

db.on("error",function(err){
    console.log(err);
});

db.on("open",function(){
    console.log("Connected to db");
})

module.exports = db;