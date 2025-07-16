// Promise ek object hai jo future mein resolve ya reject hoga. Isme then() aur catch() lagake kaam ka result handle karte hain.
//like isme hum agar kaam hojata hai to call nhi krte callback ki trh just promise krte hai ki ho jaega agar hogya to resolve kr dete hai or nhi hota to reject kr dete hai 

function cts(){
    console.log("Connecting to server...");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        resolve("Connected...");
    },2000);
    });
};

function Fc(){
    console.log("Fetching Courses...");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        resolve(['Course1','Course2','Course3','Course4']);
    },2000);
    });
}

cts()
.then(function(resolve){
    console.log(resolve);
    return Fc();
})
.then(function(resolve){
    console.log(resolve);
})