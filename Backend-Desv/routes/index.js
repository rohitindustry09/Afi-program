const express = require('express');
const router = express.Router();
const Product = require('../models/ProductSchema.js');

router.get('/category', (req, res) => {
  console.log(req.query)
});

//fetch
router.post('/add/products', async (req, res)=> {
  const { title,
        description,
        images,
        categories,
        offers } = req.body;
  
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json({ message: 'Product saved!' });
  console.log(newProduct)
 /* console.log(req.body)*/
  console.log(offers)
});

//getback db
router.get('/products', async (req, res)=> {
  
  const now = new Date();
    const twentyOneHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
    
    const pr = await Product.find({});
    console.log(pr)
    

const productsWithTime = await Product.aggregate([
  {
    $addFields: {
      timeDiff: {
        $divide: [
          { $subtract: [ now, "$createdAt" ] },
          1000 * 60 * 60 // convert ms to hours
        ]
      }
    }
  },
  {
    $match: {
      timeDiff: {
        $lte: 24
      }
    }
  }
]);

    if (productsWithTime) {
      
    res.status(201).json({ 
      messgae: 'products time less found!',
      products: productsWithTime })
    
    console.log(productsWithTime)
    }
    return res.json({ message: 'No products!' });
});

//update
router.put('/products/:id', async (req, res)=> {
  const { id } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(id, 
      { $set: { ...req.body, createdAt: new Date() } }, 
      { new: true });
  console.log(updatedProduct);
  if (updatedProduct) {
    res.status(201).json({ messgae: 'product updated!'});
  } else {
    res.status(500).json({ messgae: 'failed product updatedation!'});
  } 
});


module.exports = router;
