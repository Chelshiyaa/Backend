// callback matlb hota hai ki agar humare pass kafi sare function hai or hume vo ekh ke bad ekh nhi chalana hai 
// mtlb 1 2 3 4 ye function hai or hum chahte hai ki phle 4 chle fir 2 chale fir 3 chale fir 1 chale
// to hum callback function ka use karte hai

//ab dekho isme humne kya kia hai kii ekh func bnya hai connecttoserver jisme humne ekh or function pass kie hai cbfn thik hai 
// fir humne kia ki setimeout mai whi function call kr dia jo pass kia tha jo ki fetchcourses ke setimeout mai pass kia hai usme data ki trh pass kia hai 

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
