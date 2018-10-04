const produtoRepo = require('./produto_repo');
module.exports = function(db,produtoSchema) {
    produtoRepo(db,produtoSchema);
 };