Product = require('../model/productModel');


exports.index = (req, res) => {
    Product.get((err, products)=>{
        if(err) {
            res.json({
                status: "error",
                message: err
            })
        }

        res.json({
            status:"success",
            message: "Contact retrieved successfully",
            data: products
        });
    });
};


// exports.new = (req, res) => {
//     var product = new Product();
//     product.name = 
// }