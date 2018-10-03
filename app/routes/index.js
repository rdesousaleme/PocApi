const produtoRoutes = require('./produto_routes');
module.exports = function(app, db) {
  produtoRoutes(app, db);
 };