const JokeController = require('../controllers/jokes.controller');
module.exports = (app) =>{ 
    app.get("/api/jokes", JokeController.getalljokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.put('/api/jokes/update/:id', JokeController.updateoneJoke);
    app.post('/api/jokes/new', JokeController.createjoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteonejoke);
}