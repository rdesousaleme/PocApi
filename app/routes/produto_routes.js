module.exports = function(app,Repositorio,RepositorioFind,produtoSchema, db) {
    app.get('/produto/:id', (req, res) => {
       var retorno = RepositorioFind(req.params.id, produtoSchema)
       var retorno2 =  retorno.find(req.params.id);
        res.send(retorno2)
    });
    app.post('/produto', (req, res) => {
        const produto = { descricao: req.body.descricao }
        Repositorio(produto,produtoSchema)
        res.send('Hello')
      });
  };