const express = require("express");
const mongoose = requite("mongoose");

const app = express();
const port = process.env.PORT || 9000;

/* ROUTES */
app.get("/", (req, res) => {
  res.send("Josue Hoenicka");
});

/* MONGODB CONNECTION */

app.listen(port, () => console.log("Server working on port ", port));
