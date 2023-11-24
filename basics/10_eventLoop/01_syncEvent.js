const fs=require("fs")
console.log("program has started")

//stored in the 3rd phase of event loop
setImmediate(() => {
  console.log("setImmediate is executed");
});

//stored in 1st phase of event loop
setTimeout(()=>{
    console.log("setTimeOut function is executed")
})

process.nextTick(()=>{console.log("nectTick is executed")})
//phase 2 of event loop
fs.readFile("../textFIle/01_simple.txt",()=>{
    console.log("file reading has completed")
})


console.log("program has ended")