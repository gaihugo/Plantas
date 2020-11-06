const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser"); //Pega o body num formato json legivel para js
const app = express();
const port = 3000;

app.use(morgan("dev"));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function plant(nomeP, nomeC, cicl, repr, port) {
  return {
    nomeP,
    nomeC,
    cicl,
    repr,
    port,
  };
}

var plantas = [
  plant("Samambaia", "Nephrolepis exaltata", "Perene", "Assexuada", "Herbácea"),
];

// GET /api/todos => lista de todas as Plantas
app.get("/api/plantas/", (req, res) => {
  res.json(plantas);
  res.json({ status: "Success" });
});

// POST /api/todos => cria uma nova Planta
app.post("/api/plantas/", (req, res) => {
  plantas.push(
    plant(
      req.body.answer1,
      req.body.answer2,
      req.body.answer3,
      req.body.answer4,
      req.body.answer5
    )
  );
  res.json({ status: "Success" });
});

app.listen(port);
