// cookie is like data stored in a browser
// cookie-parser is a middleware that parses cookies attached to the client request object

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

// Home route
app.get('/', function (req, res) {
    res.send('hey');
});

// Route to check cookie
app.get('/check', function (req, res) {
    console.log(req.cookies.banned); 
    res.send("checking");
});

// Route to set 'banned' cookie
app.get('/banned', function (req, res) {
    res.cookie("banned", "true"); // ✅ Set cookie
    res.send("banned");
});

// Start server
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
