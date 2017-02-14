var Item = require('../../models/item')
module.exports = function(req, res, next) {
  Item
    .find()
    .where({hidden: false})
    .exec(function(err, items) {
      if (err)
        return next(err)
      res.json(items)
    })
}
