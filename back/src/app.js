const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require('./routes')
const notFound = require("./middlewares/notFound");

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());

app.use("/api", router);

app.use(notFound);

module.exports = app;
