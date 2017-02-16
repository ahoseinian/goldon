var Cart = require('../../../models/cart')

module.exports = function(req, res, next) {
  Cart
    .find({})
    .sort('-id')
    .populate('items.item')
    .exec(function(err, docs) {
      res.render('purchases/index', {docs});
    });
}
