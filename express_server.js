// Import necessary modules
const express = require("express");
const cookieParser = require("cookie-parser");

// Create Express app
const app = express();
const PORT = 8080;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse request bodies and cookies
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Dummy URL database for testing
const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

// Function to generate a random string (for short URLs)
const generateRandomString = () => {
  // Implementation of generateRandomString function
};

// Dummy username for testing
const dummyUsername = "TestUser";

// Modify existing routes to render templates properly
app.get("/urls", (req, res) => {
  const templateVars = {
    username: req.cookies.username || dummyUsername,
    urls: urlDatabase
    // ... any other vars
  };
  res.render("urls_index", templateVars);
});

// POST route to remove a URL resource
app.post("/urls/:id/delete", (req, res) => {
  const urlId = req.params.id;
  // Use the delete operator to remove the URL
  delete urlDatabase[urlId];
  // Redirect back to the urls_index page
  res.redirect("/urls");
});

// ... (other routes)

// POST route for handling login
app.post("/login", (req, res) => {
  const username = req.body.username;

  // Set the cookie named 'username' with the value from the request body
  res.cookie("username", username);

  // Redirect back to the /urls page
  res.redirect("/urls");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

