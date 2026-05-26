const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to DevOps Project");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.get("/version", (req, res) => {
  res.send("v1.0.0");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
