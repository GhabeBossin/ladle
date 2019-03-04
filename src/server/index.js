require('dotenv').config();
const ENV         = process.env.ENV || "development";
const express     = require('express');
const cors          = require('cors')
const bodyParser  = require("body-parser");
const os          = require('os');
const knexConfig  = require("../../knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const app         = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
const signupRoutes = require("./routes/signup");

app.use("/", cors(), signupRoutes(knex));
// app.post("/signup", (req, res) => {
//   console.log("server.js")
//   knex("users")
//         .insert({name: "billy"})
//         .then(console.log("insterted"));
// })
// app.post('/api/signup') {
//   console.log("index.js")
// }
