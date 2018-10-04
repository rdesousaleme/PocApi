const express        = require('express');
const bodyParser     = require('body-parser');
const typeorm     = require('typeorm');
const meta = require("reflect-metadata");
const app            = express();
const RepositorioInsert = require('./app/domain/repositories/Insert');
const RepositorioFind = require('./app/domain/repositories/Find');
const produtoSchema = require("./app/domain/entity/Produto");
const port = 3030;
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app,RepositorioInsert,RepositorioFind,produtoSchema, {});

app.listen(port, () => {
  console.log('We are live on ' + port);
});