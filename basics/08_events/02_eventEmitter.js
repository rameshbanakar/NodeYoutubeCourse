const http = require("http");
const event = require("events");
const server = http.createServer((req, res) => {
  res.end("hellow world");
});

server.listen(8000, () => console.log("server started"));

const myEvent = new event.EventEmitter();
myEvent.on("userEvent", (name) => {
  console.log(`user event emmitted ${name}`);
});

myEvent.on("userEvent", () => {
  console.log("user event emmitted");
});

myEvent.emit("userEvent","ramesh");
