const http=require("http")
const server=http.createServer((req,res)=>{
    console.log("new request came")
    res.end("hello from server...!!!")
})
server.listen(8000,"localhost",()=>{console.log("server has started")})