// Initiate express.js
const express = require("express");
const notesRouter = require("./notes");
const app = express();

app.use("/notes", notesRouter);

//Export index.js
module.exports = app;
