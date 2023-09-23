// Render the text or html content 
let http=require('http');

const port=8000;

let server=http.createServer((req,res)=>{
let url = req.url;
console.log(url);
// writeHead is taking 1st parameter is response code:
res.writeHead(200,{'Content-type': 'text/html'});
res.write("<h1>Hello Gaurav</h1>");
res.end();

})
server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("The server is running on port " + port);
    }
});
