const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  let { query, pathname: path } = url.parse(req.url, true);
  if (path.toLocaleLowerCase() === "/user") {
    res.end("user page");
  }
});
server.listen(8000, () => {
  console.log("server started @8000");
});
