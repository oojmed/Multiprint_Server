require('express')()
  .get('/', (req, res) => res.send('GET /:status'))
  .get('/:status', (req, res) => {
    if (req.params.status.length !== 3) {
      res.sendStatus(400)
    } else {
      res.sendStatus(parseInt(req.params.status))
      res.contentType('application/javascript')
      res.send(`window.status_${req.params.status} = true`)
    }
  })
  .listen(3000, () => console.log('> Listening'))