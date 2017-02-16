var Cart = require('../../../models/cart')
var getSum = require('./get-sum')

module.exports = function(req, res, next) {
  Cart
    .find({})
    .sort('-id')
    .populate('items.item')
    .exec(function(err, docs) {
      docs = docs.map(x => {
        return Object.assign(x, {price: getSum(x.items)})
      });
      res.render('admin/purchases/index', {docs});
    });
}
