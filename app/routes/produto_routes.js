module.exports = function(app, db) {
    app.get('/produto/:id', (req, res) => {
        res.send('Hello')
    });
    app.post('/produto', (req, res) => {
        const note = { descricao: req.body.descricao }
        console.log(req.body)
        res.send('Hello')
      });
  };