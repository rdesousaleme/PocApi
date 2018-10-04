module.exports = function(app,Repositorio,produtoSchema, db) {
    app.get('/produto/:id', (req, res) => {
        res.send('Hello')
    });
    app.post('/produto', (req, res) => {
        const produto = { descricao: req.body.descricao }
        Repositorio(produto,produtoSchema)
        res.send('Hello')
      });
  };