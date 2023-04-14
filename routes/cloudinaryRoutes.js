const router = require('express').Router()
const multer = require('multer')
const cloudinaryCtrls = require('../controllers/cloudinaryCtrls');
const { storage } = require('../controllers/cloudinaryCtrls')

const fileParser = multer({storage})

router.post('/upload', fileParser.single('imageUrl'), cloudinaryCtrls.uploadImage)

module.exports = router