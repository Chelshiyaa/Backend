
// Callback ek function hota hai jo dusre function ko complete hone ke baad call hota hai.
function connectToServer(cbfn){
    console.log("Connecting to the server...");
    setTimeout(()=>{
        console.log("Connected to the server....");
        cbfn();
    },2000);
};

function fetchCourses(cbfn){
    console.log("Fetching Courses.....");
    setTimeout(()=>{
        cbfn(['Course1','Course2','Course3']);
    });
};

// Agar kai kaam nested hain to "callback hell" ho jata hai:
//this is callback hell
connectToServer(function(){
    fetchCourses(function(data){
        console.log(data);
    })
});
// Callback hell ko avoid karne ke liye hum Promises ka use karte hain.