const http=require("http")
const fs=require("fs")

const server=http.createServer()
server.listen(8000,()=>console.log("server stared"))



// without using readable and writable streams
// server.on("request",(req,res)=>{
//     fs.readFile("../textFIle/09_01_largeDataFile.txt",(err,data)=>{
//         if(err){
//             res.end("somthing went wrong")
//             console.log(err)
//             return
//         }
//         res.end(data)
//     });
// })

// using the readable and writable streams
server.on("request", (req, res) => {
  let rs=fs.createReadStream("../textFIle/09_01_largeDataFile.txt" )
  rs.on("data",(chunk)=>{
    res.write(chunk)
   
  })
  rs.on("end",()=>{
    res.end()
  })
  
  rs.on("error",(error)=>{
    res.end(error.message)
  })
  
});