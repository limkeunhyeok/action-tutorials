const express = require("express");
const app = express();

app.get("/action", (req, res) => {
    res.send("hello world!");
});

app.listen(4000, () => {
    console.log("git action test!")
})