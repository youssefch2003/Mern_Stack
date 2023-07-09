const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required : [ true, "title is required"],
        minlength :[4, "{PATH} must be at least 4 chars"]
    },
    price : {
        type: Number,
        required : [ true, "{PATH} is required"],
    
    },
    description: {
        type: String,
        required : [ true, "{PATH} is required"],
        minlength :[5, "{PATH} must be at least 5 chars"]
    }
},{timestamps: true})

const product = mongoose.model("product",ProductSchema)
module.exports = product;