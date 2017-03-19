var Item = require('../../../models/item')
var compose = require("lodash.compose")

const goToList = (res) => (next) => (err) => {
  if (err)
    return next(err)
  res.redirect('/admin/items')
}

function extractKeyVal(obj) {
  const k = Object.keys(obj)[0]
  const val = obj[k]
  return {name: k, url: val}
}

function fixLinks(item) {
  item.links = item.links.map(extractKeyVal);
  console.log(item.links);
  return item;
}

function removeEmptyNames(item) {
  item.names = item.names.filter(x => x.length)
  return item
}

const fixItemProperties = compose(
  fixLinks,
  removeEmptyNames
)

var funcs = {
  newItem: function(req, res, next) {
    var item = new Item(fixItemProperties(req.body));
    item.save(goToList(res)(next))
  },
  edit: function(req, res, next) {
    Item.findById(req.params.id, function(err, item) {
      if (err)
        return next(err);
      item = Object.assign(item, fixItemProperties(req.body));
      item.save(goToList(res)(next))
    })
  }
}

module.exports = funcs
