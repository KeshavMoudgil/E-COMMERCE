const express = require('express');
const sellerRouter = express.Router();
const sellerController = require('../controller/sellerController')

sellerRouter.get('/',sellerController.getProducts)
sellerRouter.post('/addProduct',sellerController.createProduct)
sellerRouter.delete('/delete',sellerController.deleteProduct)