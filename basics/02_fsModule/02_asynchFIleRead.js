const fs=require("fs")
fs.readFile("../textFIle/01_simple.txt", "utf-8", (err, data) => {
  console.log(data);
  fs.writeFile("../textFIle/01_output.txt",data,err=>{
    if (err){throw err}
    console.log("data saved successfully")
  });
});
console.log("Reading the file.....")
