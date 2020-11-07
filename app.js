const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser"); //Pega o body num formato json legivel para js
const app = express();
const port = 3000;

app.use(morgan("dev"));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var indice_atual = 0;

var plantas = [
  plant("Samambaia", "Nephrolepis exaltata", "Perene", "Assexuada", "Herbácea"),
];

function plant(nomeP, nomeC, cicl, repr, port) {
  var id = indice_atual;
  indice_atual++;
  return {
    nomeP,
    nomeC,
    cicl,
    repr,
    port,
    id,
  };
}

// GET /api/plantas => lista de todas as Plantas
app.get("/api/plantas/", (req, res) => {
  res.json(plantas);
  res.json({ status: "Success" });
});

// POST /api/plantas => cria uma nova Planta
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

// PUT /api/plantas/5 => edita a planta 5
app.put("/api/plantas/:id/", (req, res) => {
  // req.params.id
  var planta = plantas.find((plant) => plant.id == req.params.id);

  planta.nomeP = req.body.answer1 || planta.nomeP;
  planta.nomeC = req.body.answer2 || planta.nomeC;
  planta.cicl = req.body.answer3 || planta.cicl;
  planta.repr = req.body.answer4 || planta.repr;
  planta.port = req.body.answer5 || planta.port;

  res.json({ status: "Success" });
});

// DELETE /api/plantas/5 => Apaga a planta 5
app.delete("/api/plantas/:id/", (req, res) => {
  var index = plantas.findIndex((plant) => plant.id == req.params.id);

  if (index == -1) {
    return res.json({ status: "Not found" });
  }

  plantas.splice(index, 1);

  res.json({ status: "Success" });
});

app.listen(port);
