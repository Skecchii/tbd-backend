const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000

const productRoutes = require('./routes/productRoutes')
const cloudinaryRoutes = require('./routes/cloudinaryRoutes')

require('dotenv').config()
require('./config/database')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products', productRoutes)
app.use('/cloudinary', cloudinaryRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));