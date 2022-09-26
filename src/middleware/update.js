const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/upload/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var update = multer({ storage: storage })

module.exports={update}
