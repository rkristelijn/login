var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// include bootstrap css
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

// set up the session
app.use(
  session({
    secret: "app",
    name: "app",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 6000 }
  })
);

var checkUser = function(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    res.render("login", { title: "Login Here" });
  }
};

// redirect to login form
app.use("/", function(req, res, next) {
  return checkUser(req, res, indexRouter);
});
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
