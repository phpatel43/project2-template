const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();

// view engine
app.engine("handlebars", exphbs({ defaultLayout }))
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
