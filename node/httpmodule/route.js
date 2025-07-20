const http=require('http');

var Server=http.createServer(function(req,res){
    if(req.url==='/') res.end("Hey");
    else res.end("Page Not Found");
})

Server.listen(3000);