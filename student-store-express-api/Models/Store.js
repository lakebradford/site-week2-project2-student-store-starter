const data = require('../data/db.json')


const getProductById = (id) => {
   
    return data.products.find((product) => product.id === id);

};

const getAllProducts = () => {
    return data 
}

module.exports = {getAllProducts, getProductById}