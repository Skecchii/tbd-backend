const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => console.log(`connected to: ${process.env.DATABASE_URL || 'mongodb://localhost:27017/shop'}`))