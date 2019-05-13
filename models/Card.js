const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    get: value => value.toUpperCase()
  },
  description: {
    type: String
  },
  tags: {
    type: Array
  },
  bookmarked: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Card', cardSchema)
