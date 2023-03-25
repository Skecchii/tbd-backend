const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000

const productRoutes = require('./routes/productRoutes')

require('dotenv').config()
require('./config/database')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/product', productRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));