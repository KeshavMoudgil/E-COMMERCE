const express = require('express');
const multer = require('multer');
const productRouter = express.Router();
const productController = require('../controller/addController')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Math.random().toString(36).substring(2, 8) + '-' + file.originalname);
  },
});

productRouter.post("/addproducts", multer({storage: storage}).single('image'), productController.addProduct);

module.exports = productRouter;                   