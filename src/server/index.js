require('dotenv').config();
const ENV         = process.env.ENV || "development";
const express     = require('express');
const os          = require('os');
const cors        = require('cors')
const knexConfig  = require("../../knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const bodyParser  = require("body-parser");
const app         = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

const learnedRoutes  = require("./routes/learned");
const signupRoutes   = require("./routes/signup");
const usersRoutes    = require("./routes/users");
const wordsRoutes    = require("./routes/words")
const gameRoutes     =  require("./routes/game");
const updateWordRoutes = require("./routes/updateWord");
const userWord       = require("./routes/userWord");
const userAchievements = require("./routes/userAchievements");
const trophyNames    = require("./routes/trophyNames");
const wordEditRoutes = require("./routes/wordEdit");
// const userEdit = require("./routes/userEdit")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use("/trophyNames", trophyNames(knex));
app.use("/userAchievements", userAchievements(knex));
app.use("/api/userWord", userWord(knex));
app.use("/learned", learnedRoutes(knex));
app.use("/api/signup", signupRoutes(knex));
app.use("/game", gameRoutes(knex));
app.use("/updateWord", updateWordRoutes(knex));
app.use("/api/users", usersRoutes(knex));
app.use("/api/words", wordsRoutes(knex));
app.use("/api/wordEdit", wordEditRoutes(knex));
