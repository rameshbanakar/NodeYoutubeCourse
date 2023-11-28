const express=require("express")
const data=require("./movies.json")

const app=express()
app.get("/api/movies/",(req,res)=>{
    res.json(data);
})
app.listen(8000,()=>{console.log("server started@8000")})