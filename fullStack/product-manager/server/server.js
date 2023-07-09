const express = require('express');
const app = express();
const cors = require("cors")
// load .env vars
require('dotenv').config(); 

// middleware
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())
// load the port
const port = process.env.PORT


require("./config/config.mongoose")
require("./routes/product.route")(app)

app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));