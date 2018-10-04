module.exports = function(db,produtoSchema) {
var typeorm = require("typeorm");

var EntitySchema = typeorm.EntitySchema;

typeorm.createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "postgres",
    synchronize: true,
    entities: [
        new EntitySchema( produtoSchema)
    ]
}).then(function (connection) {

  

    var produtoRepository = connection.getRepository("Produto");
    produtoRepository.save(db)
        .then(function(savedProduto) {
            console.log("Produto has been saved: ", savedProduto);
            console.log("Now lets load all Produto: ");

            return produtoRepository.find();
        })
        .then(function(allProduto) {
            console.log("All produto: ", allProduto);
        });


}).catch(function(error) {
    console.log("Error: ", error);
});
}