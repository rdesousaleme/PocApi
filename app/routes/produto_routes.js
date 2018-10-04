module.exports = function(app,Repositorio,RepositorioFind,produtoSchema, db) {
    app.get('/produto/:id', (req, res) => {
       var retorno = RepositorioFind(req.params.id, produtoSchema)
        res.send(retorno)
    });
    app.post('/produto', (req, res) => {
        const produto = { descricao: req.body.descricao }
        Repositorio(produto,produtoSchema)
        res.send('Hello')
      });
  };