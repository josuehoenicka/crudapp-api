const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

/* MIDDLEWARE */
app.use(express.json());
app.use("/api", userRoutes);

/* ROUTES */
app.get("/", (req, res) => {
  res.send("Welcome to my crudapp v1");
});

/* MONGODB CONNECTION */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Success connection!"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("Server working on port ", port));
