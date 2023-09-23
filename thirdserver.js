
// This is all about the sending the response to the client and taking req on the server
const { log } = require('console');
let http=require('http');

const port=8000;


const server=http.createServer((req,res)=>{
    // req.url => is giving you the url(uniform resource locater) 
    let url=req.url;
    console.log(req.url);
    res.write("Hey Buddy");
    // end() is used to end the response otherwise the server is wating for more responses.
    res.end("Band kar diya");
})

server.listen(port,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("The Server is running on port",port);
        console.log(data);

    }
});