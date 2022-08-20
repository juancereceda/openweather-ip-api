require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/index");
const server = express();

// Middlewares
server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "50mb", extended: false }));
server.use(cors());

//Dev middleware
server.use(morgan("dev"));

//Routing
server.use("/v1", routes);

module.exports = server;
