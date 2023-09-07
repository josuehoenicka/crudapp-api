const express = require("express");

const router = express.Router();

/* CREATE USER */
router.post("/users", (req, res) => {
  res.send("User created !");
});

module.exports = router;
