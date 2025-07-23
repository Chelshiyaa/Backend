const express = require('express');
const app = express();
const expressSession = require('express-session');
const flash = require('connect-flash');

// Setup session middleware
app.use(expressSession({
    secret: "random stuff",
    resave: false,
    saveUninitialized: false
}));

// Use flash middleware 
app.use(flash());

// Route to set flash message and redirect
app.get('/', function(req, res, next) {
    req.flash("error", "Invalid credentials");
    res.redirect('/error');
});

// Route to display flash message
app.get('/error', function(req, res, next) {
    let message = req.flash('error');
    res.send(message);
});

app.listen(3000);
