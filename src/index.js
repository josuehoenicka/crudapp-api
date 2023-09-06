const express = require("express");
const mongoose = requite("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

/* ROUTES */
app.get("/", (req, res) => {
  res.send("Josue Hoenicka");
});

/* MONGODB CONNECTION */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Success connection!"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("Server working on port ", port));
