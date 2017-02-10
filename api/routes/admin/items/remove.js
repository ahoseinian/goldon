var Item = require('../../../models/item')

module.exports = function(req, res, next) {
  Item
    .findOne({
      _id: req.params.id
    }, function(err, item) {
      if (err)
        return next(err)
      item.hidden = !item.hidden;
      item.save(function(err) {
        if (err)
          return next(err)
        res.redirect('/admin/items')
      })
    })

}
