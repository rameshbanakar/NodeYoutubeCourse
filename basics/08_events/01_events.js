const http=require("http")
const server=http.createServer()
server.on("request",()=>{console.log("event emmitted")})
server.listen(8000,()=>console.log("server started"))