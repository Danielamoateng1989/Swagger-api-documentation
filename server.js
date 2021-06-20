const express = require('express')
const app = express()


//Brinng in products to have access
const products = require('./data/products')

//Routes files
const productsRoutes = require('../Backend/routes/products')


//Mount routers
app.use('/api/products', productsRoutes)


//Fetches all products from the database
//METHOD - GET


const port = 1337

app.listen(port, () => {
    console.log('listening on port 1337')
})
