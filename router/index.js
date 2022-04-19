const express = require('express')
const route = express.Router()
const Controller = require('../controllers')
const CartController = require('../controllers/cartController')
const Validation = require('../middlewares/validation')

route.get('/products', Controller.getProducts)
route.get('/products/createProductForm', Controller.createProductForm)
route.get('/products/:productId', Controller.getOneProduct)
route.post('/products', Controller.createProduct)
route.post('/products/:productId', Controller.updateProduct)
route.delete('/products/:productId', Controller.deleteProduct)
route.get('/products/:productId/editForm', Controller.updateProductForm)
route.delete('/products/sku/:sku', Controller.deleteProductBySKU)

route.get('/cart', CartController.getCarts)
route.get('/cart/:id', CartController.addToCart)
route.delete('/cart/:id', CartController.deleteCart)




module.exports = route