// In this we learn , how to serve html file and read it 


// we create a basic html file and add some css also


let http=require('http');
const port=8000;

let fs=require('fs');


let server=http.createServer((req,res)=>{

    let url=req.url;
    console.log(url);

res.writeHead(200,{'Content-Type': 'text/html'});

fs.readFile('./index.html',(err, data)=>{
    if(err){
        console.log("error got");
        res.end("<h1>404</h1>");
    }
    else{
        return res.end(data);
    }
})
});

server.listen(port,(err)=>{
    if(err) {
        console.log("There is an error",err);
        return;
    }
    else{
        console.log("Server listening and running on port:",port);
    }
});

