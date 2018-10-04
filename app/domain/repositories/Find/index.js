const produtoRepoFind = require('./produto_repo');
module.exports = function(db,produtoSchema) {
     produtoRepoFind(db,produtoSchema);
 };