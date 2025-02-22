const User = require('../model/user');
const Product = require('../model/product');
const Order = require('../model/order');


exports.getProduct = async(req,res,next) =>{
  const userId = req.userId;
  const user = await User.findById(userId).populate('Order');
  const products = await Product.findById(userId);
  res.status(200).json({products, cart: user.cart, orders: user.orders});

}

exports.addToCart = async (req,res,next) =>{
  const userId = req.userId;
  const productId = req.params.id;
  const user = await User.findById(userId);
  user.cart.push( productId);
  user.save();
  res.status(200).json(user.cart)
}

exports.removeFromCart = async(req,res,next) =>{
  const product = req.productId;
  const userId = req.userId;
  const user = await User.findById(userId);
  user.cart.filter(id=> id.toString() !== productId)
  user.save();
  res.status(200).json(user);
}

exports.createOrder = async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId).populate('cart');
  let totalAmount = 0;
  for (const product of user.cart) {
    totalAmount += product.price;
  }
  const order = new Order({products: user.cart, totalAmount, customer: userId});
  await order.save();
  user.orders.push(order._id);
  user.cart = [];
  await user.save();
  res.status(200).json(order);
}