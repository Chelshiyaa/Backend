// Cookie ek chhoti si information hoti hai jo browser mein store hoti hai. Jaise:
// User login hai ya nahi?
// User ne kuch ban kiya hua hai?
// Preferences (dark mode, language)
// Lekin:
// Jab user koi request bhejta hai, wo cookie bhi bhejta hai.
// Server ko cookie data ko padhne ke liye kuch chahiye hota hai.
// Isi ka kaam cookie-parser karta hai. Wo request ke saath aayi cookies ko object ke form mein convert kar deta hai.
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
