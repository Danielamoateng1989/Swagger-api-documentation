const express = require('express')
const router = express.Router()
const { getAllProducts, getProductById, addANewProduct, updateAProduct, deletAProduct } = require('./controller/server')



router.get('/', getAllProducts )

//Fetches a single product from the database
//METHOD - GET
router.get('/:id', getProductById)

//Add a new product to the database
//METHOD - POST
router.post('/', addANewProduct)

//Updates a single product
//METHOD - PUT
router.put('/:id', updateAProduct)


//Delete a single product from the database
router.delete('/:id', deletAProduct)


module.exports = router
