const express = require("express");
const app = express();
const port = 3000;

app.use("/public", express.static("public"));

app.listen(port);
