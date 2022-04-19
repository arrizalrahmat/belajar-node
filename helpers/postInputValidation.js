function postInputValidation(payload) {
    let result = []
    for (let key in payload) {

    }

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
}

module.exports = postInputValidation