require('dotenv').config();
const ENV         = process.env.ENV || "development";
const express     = require('express');
const os          = require('os');
const knexConfig  = require("../../knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const bodyParser  = require("body-parser");
const app         = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
const signupRoutes = require("./routes/signup");
const gameRoutes =  require("./routes/game");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use("/signup", signupRoutes(knex));
app.use("/game", gameRoutes(knex));