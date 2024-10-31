const express = require("express");
const app = express();
const isWorkingHours = require("./middlewares/workingHours");


//global middleware for accepting json data from client
app.use(express.json());

// Use static files like CSS
app.use(express.static('public'));

// Apply the custom middleware to all routes
app.use(checkWorkingHours);

// Define your routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/views/services.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html');
});


//declare base route

app.get("/", (req,res) => {
    res.json({ message: "Server is Live" });
})


module.exports = app;

