const express = require("express");
const { get } = require("http");
var helmet = require("helmet");
var morgan = require("morgan");
var compression = require("compression");
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
//init middlewares
app.use(morgan("dev"));
app.use(helmet()); // bao ve
app.use(compression()); // giam dung lung file tai len

//init db
require("./dbs/init.mongodb");
// const { checkOverload } = require("./helpers/check.connect");
// checkOverload();
//init routes
app.use("/", require("./routes/index"));
//handle error
module.exports = app;
