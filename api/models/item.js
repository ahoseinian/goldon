var mongoose = require('mongoose')
var shortid = require('shortid')

var ItemSchema = mongoose.Schema({
  _id: {
    type: String,
    'default': shortid.generate
  },
  name: String,
  code: String,
  models: [Number],
  size: {
    tool: Number,
    arz: Number,
    ertefa: Number,
    ghotr: Number
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
