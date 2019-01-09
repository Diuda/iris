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
    product.pid = req.body.pid;
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
    Product.findById(req.params.product_id, (err, product) => {
        if (err)
            res.send(err);
        res.json({
            message: 'Products loading...',
            data: product
        });
    });
};



exports.update = (req, res) => {
    Product.findById(req.params.product_id, (err, product) => {
        if (err)
            res.send(err);
        product.name = req.body.name;
        product.pid = req.body.pid;
        product.category = req.body.category;
        product.price = req.body.price;
        product.color = req.body.color;

        product.save((err)=>{
            if(err)
                res.json(err);
            res.json({
                message: 'Product Info Updated',
                data: product
            });
        });
    });
};


exports.delete = (req, res)=>{
    Product.remove({ pid: req.params.pid }, (err, product)=>{
        if(err)
            res.send(err);

        res.json({
            status: "success",
            message: "Product deleted"
        });
    });
};