// callback matlb hota hai ki agar humare pass kafi sare function hai or hume vo ekh ke bad ekh nhi chalana hai 
// mtlb 1 2 3 4 ye function hai or hum chahte hai ki phle 4 chle fir 2 chale fir 3 chale fir 1 chale
// to hum callback function ka use karte hai

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
connectToServer(function(){
    fetchCourses(function(data){
        console.log(data);
    })
});