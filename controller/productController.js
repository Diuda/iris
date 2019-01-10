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
    Product.find({pid: req.params.pid}, (err, product) => {
        console.log
        if (err)
            res.send(err);
        res.json({
            message: 'Products loading...',
            data: product
        });
    });
};


//TODO fix update function
exports.update = (req, res) => {
    Product.find({pid: req.params.pid}, (err, product) => {
        console.log(product[0])
        if (err)
            res.send(err);
        product[0].name = req.body.name ? req.body.name: product[0].name;
        product[0].pid = req.body.pid ? req.body.pid: product[0].pid;
        product[0].category = req.body.category ? req.body.category: product[0].category;
        product[0].price = req.body.price ? req.body.price: product[0].price;
        product[0].color = req.body.color ? req.body.color: product[0].color;
        console.log(product);

        product[0].save((err)=>{
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