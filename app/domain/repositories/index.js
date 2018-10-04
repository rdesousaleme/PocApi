const produtoRepo = require('./produto_repo');
module.exports = function(db) {
    produtoRepo( db);
 };