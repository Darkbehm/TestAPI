const DATA = require('../Data/Data.json');

const getBrandsByProducts = async (request, response) => {
    const { product } = request.params;
    const brandsIds = DATA.products[product].brands;
    const brands = brandsIds.map(brandId => {
        return {
            "id": brandId,
            "name": DATA.brands[brandId]
        }
    });
    return response.json(brands);
}

module.exports = {
    getBrandsByProducts
}