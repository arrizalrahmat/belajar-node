/*
    - Buat endpoint :
        1. Create Product
        2. Get Product
        3. Get One Product
        4. Update Product
        5. Delete Product
        6. Buy One Product => return message "Berhasil Membeli <nama \oduct>"

    - Pakai arsitektur models, controllers
    - routing boleh langsung di app.js atau terpisah
    - SKU di generate secara otomatis formatnya: "company[0]-<huruf depan product>" UPPERCASE
*/

const express = require('express')
const app = express()
const port = 3000
const router = require('./router')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})