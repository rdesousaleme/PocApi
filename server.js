const express        = require('express');
const bodyParser     = require('body-parser');
const typeorm     = require('typeorm');
const meta = require("reflect-metadata");
const app            = express();
const Repositorio = require('./app/domain/repositories');
const produtoSchema = require("./app/domain/entity/Produto");
const port = 3030;
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app,Repositorio,produtoSchema, {});

app.listen(port, () => {
  console.log('We are live on ' + port);
});