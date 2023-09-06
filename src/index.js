const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

/* ROUTES */
app.get('/', (req, res) => {
    res.send("Josue Hoenicka");
})

app.listen(port, () => console.log("Server working on port ", port));