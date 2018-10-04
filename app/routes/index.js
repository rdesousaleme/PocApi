const produtoRoutes = require('./produto_routes');
module.exports = function(app,Repositorio,produtoSchema, db) {
  produtoRoutes(app,Repositorio,produtoSchema, db);
 };