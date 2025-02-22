require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const sellerRouter = require("./router/sellerRouter")
const customerRouter = require("./router/customerRouter")
// const productRouter = require("./router/productRouter");
const errorController = require("./controller/errorController")
const app = express();

 //const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.xpg4d.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads')); 

app.use(sellerRouter);
app.use(customerRouter);
// app.use(productRouter);

 const PORT = 5173;
  const MONGO_DB_URL = `mongodb+srv://Keshav:${encodeURIComponent('Keshav@123')}@cluster0.xpg4d.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(MONGO_DB_URL)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Server running at: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });      