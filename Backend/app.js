// require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// const MONGO_DB_URL =
//   `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.xpg4d.mongodb.net/${process.env.MONGO_DB_DATABASE}`;

const router = require('./router/productRouter')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads')); 

app.use(router);



const PORT = 3000;
const MONGO_DB_URL = 'mongodb+srv://Keshav:Keshav@123@cluster0.xpg4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});      