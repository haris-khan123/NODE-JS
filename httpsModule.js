const http= require('http');

//creating a web server
const server=http.createServer()

//listening the server event

server.on("connection",(socket)=>{
console.log("New connection");
})

server.listen(3000);

console.log("listening on port 3000......");