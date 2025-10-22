const express = require("express");
const app = express();
const connectdb = require("./db/db");
app.use(express.json());
//app.use(cors());

connectdb();

module.exports = app;