const express = require('express');
const customerController = require('../controller/customerController')
const customerRouter = express.Router();

customerRouter.get("/data",customerController.getProduct);
customerRouter.post("/cart/:id",customerController.addToCart);
customerRouter.delete("/cart/:id",customerController.removeFromCart);
customerRouter.post("/order",customerController.createOrder);

module.exports = customerRouter;