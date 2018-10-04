const produtoRepoInsert = require('./produto_repo');
module.exports = function(db,produtoSchema) {
    produtoRepoInsert(db,produtoSchema);
 };