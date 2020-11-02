const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser"); //Pega o body num formato json legivel para js
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(morgan("dev"));

app.use(express.static("public"));

app.listen(port);
