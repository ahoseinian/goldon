var Item = require('../../../models/item')
var Image = require('../../../models/image')
var async = require('async')
var formidable = require('formidable');
var sharp = require('sharp')
var path = require('path')


module.exports = function(req, res, next) {
  async
    .autoInject({
      files: function(cb) {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
          cb(err, files)
        })
      },
      image: function(cb) {
        var image = new Image({});
        image.save(cb)
      },
      saveImage: function(files, image, cb) {
        var savePath = path.join(__dirname, '/../../../storage/images/original', image[0].id + '.jpg')
        sharp(files.image.path).toFile(savePath, cb)
      },
      saveThumb: function(files, image, cb) {
        var savePath = path.join(__dirname, '/../../../storage/images/thumbs', image[0].id + '.jpg')
        sharp(files.image.path)
          .resize(200)
          .toFile(savePath, cb)
      },
      saveFifty: function(files, image, cb) {
        var savePath = path.join(__dirname, '/../../../storage/images/50', image[0].id + '.jpg')
        sharp(files.image.path)
          .resize(50)
          .toFile(savePath, cb)
      },
      item: function(cb) {
        Item.findById(req.params.id, cb)
      },
      addImage: function(item, image, cb) {
        item
          .images
          .push(image[0])
        item.save(cb)
      }

    }, function(err, results) {
      if (err)
        return next(err)
      res.redirect('/admin/items')
    })
}
