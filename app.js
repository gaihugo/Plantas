const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser"); //Pega o body num formato json legivel para js
const app = express();
const port = 3000;

app.use(morgan("dev"));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET /api/todos => lista de todas as Todos
app.get("/api/plantas/", (req, res) => {
  res.json(plantas);
});

app.listen(port);
