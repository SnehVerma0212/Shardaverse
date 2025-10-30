const express = require("express");
const app = express();
const connectdb = require("./db/db");
const authRoutes = require("./routes/auth.routes");


app.use(express.json());
//app.use(cors());

app.use("/api/v1/auth", authRoutes);

connectdb();

module.exports = app;