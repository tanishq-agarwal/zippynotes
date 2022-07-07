require('dotenv').config();
const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 5000;
const notes = require("../frontend/src/data/notes");

app.get("/", (req, res) => {
    res.send("API is running");
})

app.get("/api/notes", (req, res) => {
    res.json(notes);
})

app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})