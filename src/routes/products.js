const express = require('express');
const {cart, detail, addProduct, editProduct, updateProduct, removeProduct, store} = require('../controllers/productsController');
const router = express.Router();
const upload = require('../middlewares/upload')

/* /products */

router
    .get('/cart', cart)
    .get('/detail/:id', detail)
    .get('/addProduct', addProduct)
    .post('/addProduct', upload.single('image'), store)
    .get('/editProduct/:id', editProduct)
    .put('/updateProduct/:id', upload.single('image'), updateProduct)
    .delete('/removeProduct/:id', removeProduct)

module.exports = router;