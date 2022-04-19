const Model = require('../models')

class Controller {
    static getProducts(req, res) {
        if (req.query.filter) {
            const data = Model.getProductsFiltered(req.query.filter)
            res.render('products', {data})
        } else {
            const data = Model.getProducts()
            res.render('products', {data})
        }
    }

    static getOneProduct(req, res) {
        const id = Number(req.params.productId)

        const data = Model.getOneProduct(id)
        res.send(data)
    }

    static createProductForm(req, res) {
        res.render('createProductForm')
    }

    static createProduct(req, res) {
        // console.log(req.body);
        const {name, company, type, stock, price} = req.body
        let missingFields = []

        //input validation
        console.log('method jalan');
        if (!name) {
            missingFields.push('name')
        }
        if (!company) {
            missingFields.push('company')
        }
        if (!type) {
            missingFields.push('type')
        }
        if (!stock) {
            missingFields.push('stock')
        }
        if (!price) {
            missingFields.push('price')
        }
        
        if (missingFields.length > 0) {
            res.status(400).json({isSuccess: false, message: `${missingFields.join(', ')} is required`})
        } else {
            const response = Model.createProduct({name, company, type, stock: Number(stock), price: Number(price)}, (err, response) => {
                console.log(response, 'ini response');
    
                if (response === 'sukses') {
                    res.redirect('/products')
                } else {
                    res.send(err)
                }

            })
        }
        
    }

    static updateProductForm(req, res) {
        const {productId} = req.params
        const data = Model.getOneProduct(Number(productId))
        // console.log(data);
        res.render('editForm', {data})

    }

    static updateProduct(req, res) {
        // id
        const {productId} = req.params
        const {name, company, type, stock, price} = req.body

        const response = Model.updateProduct(Number(productId), {id: Number(productId), name, company, type, stock, price})
        res.redirect('/products')
        // data yang baru
    }

    static deleteProduct(req, res) {
        const {productId} = req.params
        const response = Model.deleteProduct(Number(productId))
        res.send(response)
    }

    static deleteProductBySKU(req, res) {
        console.log(req.params.sku, 'delete by sku');
    }
}
module.exports = Controller