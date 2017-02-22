var mongoose = require('mongoose')

var ItemSchema = mongoose.Schema({
  name: String,
  model: Number,
  size: {
    tool: Number,
    arz: Number,
    ertefa: Number
  },
  price: {
    type: Number,
    default: 0
  },
  info: String,
  maintenance: String,
  hidden: {
    type: Boolean,
    default: false
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image'
    }
  ]
}).set('toJSON', {virtuals: true})

module.exports = mongoose.model('Item', ItemSchema)
