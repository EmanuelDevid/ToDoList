const express = require("express");
const path = require("path"); //responsável por direcionar as pastas
const routes = require("./routes//routes");
const conectToDb = require("./database/db");

conectToDb();
const app = express();
const port = 3000; //porta

app.set("view engine", "ejs");
//arquivos estáticos na pasta public
app.use(express.static(path.join(__dirname, "public"))); //path é a pasta principal
app.use(express.urlencoded()); //pegando informações que vêm do form do index.js
app.use(routes);

app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`)
);
