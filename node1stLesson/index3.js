const express = require('express')
const app = express()
const Electricity = require('./Electricity')
const products =require('./products')

app.get('/', (req, res) => {
    res.send(JSON.stringify(Electricity))
})

app.get('/products', (req, res) => {
    res.send(JSON.stringify(products))
})

app.listen(8000, () => {
    console.log('Server running at\n http://127.0.0.1:8000/');
    console.log('200')
})