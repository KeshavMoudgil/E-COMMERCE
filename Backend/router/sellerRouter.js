const express = require('express');
const multer = require('multer');
const sellerRouter = express.Router();
const sellerController = require('../controller/sellerController')


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Math.random().toString(36).substring(2, 8) + '-' + file.originalname);
  },
});

sellerRouter.get('/products',sellerController.getProducts)
sellerRouter.post('/products', multer({storage: storage}).single('image'),sellerController.createProduct)
sellerRouter.delete('/product:id',sellerController.deleteProduct)

module.exports = sellerRouter;

