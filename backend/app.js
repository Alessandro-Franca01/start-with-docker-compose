const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose

// Database, usando a api do node no lugar da api do mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

// Teste
server.get('/', (req, res, next) => res.send('Backend'))

//Start Server
server.listen(3000)

