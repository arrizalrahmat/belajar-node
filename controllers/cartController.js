const CartModel = require("../models/cartModel")

class CartController {
    static getCarts(req, res) {
        const data = CartModel.getItems()
        res.send(data)
    }

    static addToCart(req, res) {
        const response = CartModel.addItem(Number(req.params.id))
        res.send(response)
    }

    static deleteCart(req, res) {}
}

module.exports = CartController