let router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API',
        message: 'RESTFUL'
    })
})

var productController = require('../controller/productController');


router.route('/products')
    .get(productController.index)
    .post(productController.new)

router.route('/products/:pid')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete)


module.exports = router;