// importar dependencia
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// iniciando o express
const server = express();
// utilizando os arquivos estaticos
server
  .use(express.urlencoded({ extended: true }))

  .use(express.static("public"))
  // configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // rotas da aplicacao
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

// ligando servidor
server.listen(5500);
