const produtoRoutes = require('./produto_routes');
module.exports = function(app,Repositorio,RepositorioFind,produtoSchema, db) {
  produtoRoutes(app,Repositorio,RepositorioFind,produtoSchema, db);
 };