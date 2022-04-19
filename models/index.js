const fs = require('fs')

class Model {
    static getProducts() {
        const data = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))
        return data;
    }

    static getProductsFiltered(filter) {
        let data = Model.getProducts()
        return data.filter((item) => {
            if (item.type === filter) {
                return true
            }
            return false
        })
    }

    static getOneProduct(id) {
        const data = this.getProducts()
        let result

        for (let i = 0; i < data.length; i++) {
            // console.log(id, data[i].id);
            if (id === data[i].id) {
                result = data[i]
                break;
            }
        }
        return result
    }

    static createProduct(payload, cb) {
        const data = Model.getProducts()
        let id = 1

        if (data.length > 0) {
            id = data[data.length - 1].id + 1
        }
        let sku = payload.company[0].toUpperCase() + '-' + payload.name[0].toUpperCase()
        for (let i = 1; i < payload.name.length; i++) {
            if (payload.name[i - 1] === ' ') {
                sku += payload.name[i].toUpperCase()
            }
        }
        sku += id
        const newProduct = {
            id,
            name: payload.name,
            company: payload.company,
            type: payload.type,
            stock: payload.stock,
            price: payload.price,
            SKU: sku
        }
        data.push(newProduct)
        // fs.writeFileSync('./products.json', JSON.stringify(data, null, 2))
        fs.writeFile('./products.json', JSON.stringify(data, null, 2), (err) => {
            if (err) {
                cb(err)
            } else {
                cb(null, 'sukses')
            }
        })
    }
    
    static updateProduct(id, payload) {
        // console.log(id);
        // console.log(payload);
        const products = Model.getProducts()
        console.log(payload);
        let result = []
        let sku = payload.company[0].toUpperCase() + '-' + payload.name[0].toUpperCase()
        for (let i = 1; i < payload.name.length; i++) {
            if (payload.name[i - 1] === ' ') {
                sku += payload.name[i].toUpperCase()
            }
        }
        sku += id
        payload.SKU = sku
        console.log(payload, 'ini payload -=-=-=-');
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                result.push(payload)
            } else {
                result.push(products[i])
            }
        }

        fs.writeFileSync('./products.json', JSON.stringify(result, null, 4))
        return `Berhasil mengupdate product dengan id: ${id}`
    }

    static deleteProduct(id) {
        const allProducts = Model.getProducts()
        let result = []
        for (let i = 0; i < allProducts.length; i++) {
            const product = allProducts[i]

            if (product.id !== id) {
                result.push(product)
            }
        }
        fs.writeFileSync('./products.json', JSON.stringify(result, null, 4))
        return `sukses delete data dengan id: ${id}`
    }

}

module.exports = Model