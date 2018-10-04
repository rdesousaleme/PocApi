module.exports = {
    name: "Produto",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        descricao: {
            type: "varchar"
        }
    }
};