// Create First server
const http=require('http');
const port=8000;

const server = http.createServer();
server.listen(port, function(err){
    if (err){
        return err;
    }
    else {
        console.log("Runnig sever");
    }
});
