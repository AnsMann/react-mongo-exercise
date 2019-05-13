const setupServer = require('./setup-server')
const app = setupServer()

const Card = require('./models/Card')

app.get('/cards', (req, res) => {
  Card.find()
    .then(cards => res.json(cards))
    .catch(err => res.json(err))
})

app.post('/cards', (req, res) => {
  Card.create(req.body)
    .then(card => res.json(card))
    .catch(err => res.json(err))
})

app.patch('/cards/:_id', (req, res) => {
  const { _id } = req.params
  Card.findByIdAndUpdate(_id, req.body, { new: true })
    .then(card => res.json(card))
    .catch(err => res.json(err))
})
