const express = require("express");
const data = require("./data.js");
const server = express();
server.get("/", (req, res) => {
  res.send("Hi!");
});

server.get("/actors", (req, res) => {
  res.status(200).json(data);
});
server.get("/actors/:id", (req, res) => {
  const { id } = req.params;
  const actor = data.find((actor) => actor.id === parseInt(id));
  if (actor) {
    res.status(200).json(actor);
  } else {
    res.status(400).send("Not found.");
  }
});
server.listen(5000, () => {
  console.log("http://localhost:5000 request");
});
