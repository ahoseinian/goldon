var Item = require('../../models/item')
module.exports = function(req, res, next) {
  Item
    .findById(req.params.id)
    .exec(function(err, item) {
      if (err)
        return next(err)
      res.json(item)
    })
}
