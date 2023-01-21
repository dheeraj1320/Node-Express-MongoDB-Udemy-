const EventEmmiter = require("events");
const http = require("http");

class Sales extends EventEmmiter {
  constructor() {
    super();
  }
}

const myEmmiter = new Sales();

myEmmiter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmmiter.on("newSale", () => {
  console.log("Customer name: Dheeraj");
});

myEmmiter.on("newSale", (stock) => {
  console.log(`There are ${stock} items left in stock.`);
});

myEmmiter.emit("newSale", 9);

////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recieved");
  res.end("Request recieved");
});

server.on("request", (req, res) => {
  console.log("Anothert Request recieved 😭");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request....");
});
