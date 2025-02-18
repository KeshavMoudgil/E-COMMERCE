const express = require('express');
const app = express();
const router = require('./router/productRouter')
const cors = require('cors'); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads')); 

app.use(router);



const PORT = 3000;
app.listen(PORT, () => 
  { console.log(`Server is running on port http://localhost:${PORT}`) });       