var mongoose = require('mongoose')

var ItemSchema = mongoose.Schema({
  name: String,
  model: Number,
  code: String,
  size: {
    tool: Number,
    arz: Number,
    ertefa: Number,
    ghotr: Number,
  },
  price: {
    type: Number,
    default: 0
  },
  maintenance: String,
  hidden: {
    type: Boolean,
    default: false
  },
  colors: [String],
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image'
    }
  ]
}).set('toJSON', {virtuals: true})

module.exports = mongoose.model('Item', ItemSchema)
