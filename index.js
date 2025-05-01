const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/IndexRoute");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//App middleware
app.use(express.urlencoded({ extended: true }));

//Router
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});