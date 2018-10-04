var typeorm = require("typeorm");
var EntitySchema = typeorm.EntitySchema;
module.exports = function(db,produtoSchema) {
     
     return {
        find: function(value) { 
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
                return produtoRepository.find({ where: {id: value} });
            

            }).catch(function(error) {
                console.log("Error: ", error);
            });
        }
    }
 };