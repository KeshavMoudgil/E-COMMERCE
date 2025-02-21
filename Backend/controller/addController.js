const model = require('../model/product');
exports.addProduct = async(req,res,next) =>{
  const{productName,brandName,price,quantity,category,description,productImage,date}=req.body;
  const product = new product({
    productName,brandName,price,quantity,category,description,productImage,date

  })
  product.save().then((product)=>{
    res.send(product).status(201);
  }).catch((err)=>{
    console.log(err); 
    res.send(err).status(501);
  }
  )
}
