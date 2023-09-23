const { log } = require('console');
let http=require('http');
// It is a inbulit Module which gives us properties to work with server and other stuff

let port=8000;

const server=http.createServer((req,res)=>{
    res.write("Hello This is Gaurav  Tripathi");
    res.end("Hello This is end");
});

server.listen(port,(err)=>{
    if(err) {
        console.log(err);
    }
    else{
        console.log("Hey srver is running on port: " + port);
    }
});



