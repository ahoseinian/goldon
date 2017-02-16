var mongoose = require('mongoose')

var CartSchema = mongoose.Schema({
  fullname: String,
  tel: String,
  address: String,
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
      },
      quantity: Number
    }
  ]
}).set('toJSON', {virtuals: true})

module.exports = mongoose.model('Cart', CartSchema)
