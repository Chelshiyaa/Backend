const http=require('http');

let Server=http.createServer(function(req,res){
    res.end("Chala rha hai");
})

Server.listen(3000);