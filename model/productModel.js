var mongoose = require('mongoose');


var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pid: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    color: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});


var Product = module.exports = mongoose.model('product', productSchema);

module.exports.get = (callback, limit) => {
    Product.find(callback).limit(limit);
}