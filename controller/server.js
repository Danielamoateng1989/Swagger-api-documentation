
const products = require('../data/products')

//Fetches all products from the database
//HTTP METHOD - GET
const getAllProducts = (req, res) => {
    res.json(products)

}

//Fetches a product by its ID
//HTTP METHOD - GET
const getProductById = (req, res) => {

    const id = req.params.id

    const getProduct = products.find(product => product.id === parseInt(id))
     
    res.send(getProduct)

}

//Adds a new product to the database
//HTTP METHOD - POST
const addANewProduct = (req, res) =>{
    res.send('<h1>Creates a new product</h1>')

}

//Updates a single product inside the database
//HTTP METHOD - PUT
const updateAProduct = (req, res) =>{
    res.send('<h1>Update an existing product</h1>')

}

//Delete a product inside the database
//HTTP METHOD - DELETE
const deletAProduct =  (req, res) =>{
    res.send('<h1>Deletes a product</h1>')

}

module.exports = {
    getAllProducts,
    getProductById,
    addANewProduct,
    updateAProduct,
    deletAProduct

}