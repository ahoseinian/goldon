var Item = require('../../../models/item')
var Image = require('../../../models/image')
var async = require('async')
var formidable = require('formidable');
var lwip = require('lwip')
var path = require('path')

function getFilePath(imageId, size) {
  return path.join(__dirname, '/../../../storage/images', size, imageId + '.jpg')
}

module.exports = function(req, res, next) {
  async
    .autoInject({
      files: function(cb) {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
          cb(err, files)
        })
      },
      imageModel: function(cb) {
        var image = new Image({});
        image.save(cb)
      },
      saveImages: function(imageModel, files, cb) {
        lwip
          .open(files.image.path, 'jpg', function(err, image) {
            async.series([
              function(callback) {
                image
                  .batch()
                  .writeFile(getFilePath(imageModel[0].id, 'original'), callback)
              },
              function(callback) {
                image
                  .batch()
                  .resize(200)
                  .writeFile(getFilePath(imageModel[0].id, 'thumbs'), callback)
              },
              function(callback) {
                image
                  .batch()
                  .resize(50)
                  .writeFile(getFilePath(imageModel[0].id, '50'), callback)
              }
            ], cb);
          });
      },
      item: function(cb) {
        Item.findById(req.params.id, cb)
      },
      addImage: function(item, imageModel, cb) {
        item
          .images
          .push(imageModel[0])
        item.save(cb)
      }

    }, function(err, results) {
      if (err)
        return next(err)
      res.redirect('/admin/items')
    })
}
