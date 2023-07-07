const mongoose = require('mongoose');
const DB = "jokes";

mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`) 
    .then(() => console.log('Established a connection to the database ' + DB))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
    