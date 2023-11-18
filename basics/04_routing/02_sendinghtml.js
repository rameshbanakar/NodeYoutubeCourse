const http = require("http");
const fs = require("fs");
data = fs.readFileSync("../textFIle/index.html", "utf-8");
const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === "/" || path.toLowerCase() === "/home") {
    res.end(data);
  } else if (path.toLowerCase() === "/about") {
    res.end("you are in about page");
  } else {
    res.end("Error 404: page not found!");
  }
});
server.listen(8000, "localhost", () => {
  console.log("server has started");
});
