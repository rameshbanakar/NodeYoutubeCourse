const http=require("http")
const fs=require("fs")
data = fs.readFileSync("../textFIle/index.html","utf-8");
const server=http.createServer((req,res)=>{
    console.log("new request came")
    res.end(data);
})
server.listen(8000,"localhost",()=>{console.log("server has started")})