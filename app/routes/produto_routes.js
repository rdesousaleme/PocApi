module.exports = function(app, db) {
    app.get('/produto/:id', (req, res) => {
        res.send('Hello')
    });
    app.post('/produto', (req, res) => {
        const produto = { descricao: req.body.descricao }
        require('./app/domain/repositories')(produto);
        res.send('Hello')
      });
  };