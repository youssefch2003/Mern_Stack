
const product = require("../model/product.model");

// CREATE
module.exports.create = (req, res) => {
    product.create(req.body)
    .then((newproduct)=>{
        res.json({product: newproduct})
    })
    .catch((err)=>{
        res.json({ message: "Something went wrong", error: err });
    });
};
// READ ALL
module.exports.readAll = (req, res) => {
    product.find()
    .then((allproducts) =>{
        res.json(allproducts)
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    })

    
}
//READ ONE
module.exports.findOne = (req, res) => {
    product.findOne({ _id: req.params.id })
        .then(oneSingle => {
            res.json( oneSingle)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}


// UPDATE 
module.exports.update = (req, res) =>{
    product.findOneAndUpdate({_id: req.params.id}, req.body,
    {new: true, runValidators: true})
    .then((updatedShow)=>{
        res.json(updatedShow)
    })
    .catch((err) => {
        res.status(400).json({ message: 'Something went wrong', error: err })
    });
}
// DELETE
module.exports.delete = (req, res) => {
    product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json( result )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}