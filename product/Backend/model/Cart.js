const mongoose = require('mongoose');

var cartSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"product"},
});

var CartModel = mongoose.model("cart",cartSchema);
module.exports = CartModel