const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/IndexRoute");
const formRouter = require("./routes/formRoute");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", formRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});