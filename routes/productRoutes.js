const router = require('express').Router()
const productCtrl = require('../controllers/productCtrls')
const multer = require('multer')
const { storage } = require('../controllers/cloudinaryCtrls')

const fileParser = multer({storage})

router.get('/', productCtrl.showAllProducts)
router.get('/category/:categoryName', productCtrl.getProductsByCategory)
router.get('/:productId', productCtrl.productDetails)
router.post('/create', fileParser.single('imageUrl'),productCtrl.createProduct)
router.patch('/:productId/update',fileParser.single('imageUrl'), productCtrl.updateProduct)
router.delete('/:productId/delete', productCtrl.deleteProduct)

module.exports = router