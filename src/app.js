const express = require("express");
const { get } = require("http");
import helmet from "helmet";
var morgan = require("morgan");
var compression = require("compression");
const app = express();

//init middlewares
app.use(morgan("dev"));
app.use(helmet()); // bao ve
app.use(compression()); // giam dung lung file tai len
//init db
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "welcome",
  });
});
//init routes
//handle error
module.exports = app;
