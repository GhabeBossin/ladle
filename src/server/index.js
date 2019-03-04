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
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
  next();
});
// app.get("/", (req, res) => {
//   console.log(req)
// })
app.use("/", function(req, res, next) {
   signupRoutes(knex)
  });
// app.post("/signup", (req, res) => {
//   console.log("server.js")
//   knex("users")
//         .insert({name: "billy"})
//         .then(console.log("insterted"));
// })
// app.post('/api/signup') {
//   console.log("index.js")
// }
