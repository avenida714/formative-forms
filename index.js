const express = require("express");
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true});
const cookieParser = require("cookie-parser");
const createRouter = require("./routes/create");

const app = express();

const errorArray = (req, res, next) => {
  req.errors = [];
  next()
}

app.use(express.urlencoded({extended: false}))
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render('index', { users });
});

// app.get('/create', (req, res) => {
//   res.render('create', {})
// });

app.get('/create', csrfProtection, (req, res) => {
  res.render('create', {csrfToken: req.csrfToken(), errors: [], data: {}})
});

app.post('/create', errorArray, csrfProtection, (req, res) => {
  // res.render('create', {})
  users.push({
    id: users.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmedPassword: req.body.confirmedPassword
  })

  res.redirect("/");
});



app.use("/create", createRouter);

const users = [
  {
    id: 1,
    firstName: "Jill",
    lastName: "Jack",
    email: "jill.jack@gmail.com"
  }
];

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
