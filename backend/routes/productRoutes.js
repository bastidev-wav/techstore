const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');

const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.route('/')
    .get(getProducts)
    // El 'imagen' debe coincidir con el campo FormData del Frontend
    .post(upload.single('imagen'), createProduct);

router.route('/:id')
    .put(upload.single('imagen'), updateProduct)
    .delete(deleteProduct);

module.exports = router;