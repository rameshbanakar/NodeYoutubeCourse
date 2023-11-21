const http = require("http");
const fs = require("fs");

const server = http.createServer();
server.listen(8000, () => console.log("server stared"));

server.on("request", (req, res) => {
  let rs = fs.createReadStream("../textFIle/09_01_largeDataFile.txt");
  rs.pipe(res)
});