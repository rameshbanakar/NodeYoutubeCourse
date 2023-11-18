const http = require("http");
const fs = require("fs");
let html= fs.readFileSync("../textFIle/index.html", "utf-8");
let data = fs.readFileSync("../textFIle/users.json", "utf-8");
data=JSON.parse(data)
let users=data.map((user)=>{
  html.replace("{{%LOGIN%}}",user.login)
  
})
const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === "/" || path.toLowerCase() === "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("you are in Home");
  } else if (path.toLowerCase() === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("you are in about page");
  } else if (path.toLowerCase() === "/users") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(users.join(","));
    
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    res.end("Error 404: page not found!");
  }
});
server.listen(8000, "localhost", () => {
  console.log("server has started");
});
