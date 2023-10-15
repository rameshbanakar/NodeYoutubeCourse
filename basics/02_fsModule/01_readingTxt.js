const fs=require("fs")

//reading a file synchronously
let textInput=fs.readFileSync("../textFIle/01_simple.txt","utf-8")
console.log(textInput)

//writing a file synchronously
let content=`data from 01_simple.txt: ${textInput} \n date ${new Date()}`
fs.writeFileSync("../textFIle/01_output.txt", content);
console.log("writing of file completed");