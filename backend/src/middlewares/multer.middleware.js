const multer = require("multer");
const path = require("path");

const myStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/temp"); 
  }, 
  filename: function (req, file, cb) {
    cb(null, Date.now() + "----" + file.originalname);
  },
});

let upload = multer({ storage: myStorage });
module.exports = { upload };

