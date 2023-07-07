const Joke = require('../models/jokes.model');

// READ ALL
module.exports.getalljokes = (req,res)=>{
    Joke.find()
    .then((alljokes)=>res.json( {jokes:alljokes})
    )
    .catch((err)=> {
        res.json( {message:'error error',error:err});
        
    });
};

//READ ONE
module.exports.findOneJoke = (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then(onejoke => {
                res.json({ joke: onejoke })
            })
            .catch((err) => {
                res.json( {message:'error error',err});
            });
        }
    
// CREATE    
module.exports.createjoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ joke: newJoke })
        })
        .catch((err) => {
            res.json( {message:'error error',err});
        });
    }
// UPDATE 
module.exports.updateoneJoke = (req, res) => {
        Joke.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then(resJoke => {
                res.json({ joke: resJoke })
            })
            .catch((err) => {
                res.json( {message:'error error',err});
            });}
// DELETE
module.exports.deleteonejoke = (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({ result: result })
                    })
            .catch((err) => {
                res.json( {message:'error error',err});
            });}
