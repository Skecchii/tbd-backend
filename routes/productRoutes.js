const router = require('express').Router()
const productCtrl = require('../controllers/productCtrls')

router.get('/', productCtrl.showAllProducts)
router.get('/:categoryName', productCtrl.getProductsByCategory)
router.get('/:productId', productCtrl.productDetails)
router.post('/', productCtrl.createProduct)
router.patch('/:productId', productCtrl.updateProduct)
router.delete('/:productId', productCtrl.deleteProduct)



module.exports = router