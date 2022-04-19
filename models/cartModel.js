const Model = require("./index")
const fs = require('fs')

class CartModel {
    static getItems() {
        const items = JSON.parse(fs.readFileSync('./shoppingCarts.json', 'utf-8'))
        return items
    }

    static addItem(productId) {
        const product = Model.getOneProduct(productId)
        const items = CartModel.getItems()
        items.push(product)
        fs.writeFileSync('./shoppingCarts.json', JSON.stringify(items, null, 4))
        return `Berhasil menambahkan produk ${product.name} ke dalam keranjang`
    }

    static deleteItem() {}
}

module.exports = CartModel