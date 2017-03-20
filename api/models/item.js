var mongoose = require('mongoose')
var shortid = require('shortid')
var models = require('./models')

var ItemSchema = mongoose.Schema({
  _id: {
    type: String,
    'default': shortid.generate
  },
  name: String,
  code: String,
  models: [Number],
  names: [String],
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
  information: String,
  benefits: String,
  hidden: {
    type: Boolean,
    default: false
  },
  colors: [String],
  links: [
    {
      name: String,
      url: String
    }
  ],
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
}).set('toJSON', {virtuals: true})

ItemSchema.virtual('modelsNames').get(function() {
  return this.models.map(x => models.find(z => z.value === x).label);
});

module.exports = mongoose.model('Item', ItemSchema)
