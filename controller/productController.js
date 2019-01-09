Product = require('../model/productModel');


exports.index = (req, res) => {
    Product.get((err, products) => {
        if (err) {
            res.json({
                status: "error",
                message: err
            })
        }

        res.json({
            status: "success",
            message: "Contact retrieved successfully",
            data: products
        });
    });
};


exports.new = (req, res) => {
    var product = new Product();
    product.name = req.body.name ? req.body.name : product.name;
    product.id = req.body.id;
    product.category = req.body.category;
    product.price = req.body.price;
    product.color = req.body.color;


    product.save((err) => {
        if (err)
            res.json(err)


        res.json({
            message: "New Product Created",
            data: product

        });
    });
};


exports.view = (req, res) => {
    Product.findById(req.params.product_id, (err, product){
        if(err)
            res.send(err);
        res.json({
            message: 'Products loading...',
            data: product
        });
    });
};

