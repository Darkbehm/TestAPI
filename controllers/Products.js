const DATA = require('../Data/Data.json');

const getProductsByCategory = async (request, response) => {
    const { category } = request.params;
    const products = Object.values(DATA.products);
    let res = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].category == category) {
            res.push(products[i]);
        }
    }
    return response.json(res);
}

module.exports = {
    getProductsByCategory
}