class Validation {
    static isUserHuman(req, res, next) {
        if (req.body.species === 'human') {
            next()
        } else {
            res.send(`${req.body.species} TIDAK BOLEH MENAMBAHKAN PRODUK`)
        }

    }
}

module.exports = Validation