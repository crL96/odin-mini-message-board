const express = require("express");
const indexRouter = require("./routes/IndexRoute");
const newRouter = require("./routes/newRoute");

const app = express();

app.use("/", indexRouter);
app.use("/new", newRouter);