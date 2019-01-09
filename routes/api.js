let router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API',
        message: 'RESTFUL'
    })
})


module.exports = router;