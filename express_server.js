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

// Dummy username for testing
const dummyUsername = "TestUser";

// Modify existing routes to render templates properly
app.get("/", (req, res) => {
  // Redirect to the /urls page or any other desired page
  res.redirect("/urls");
});

app.get("/urls", (req, res) => {
  const templateVars = {
    username: req.cookies.username || dummyUsername,
    urls: {
      "b2xVn2": "http://www.lighthouselabs.ca",
      "9sm5xK": "http://www.google.com"
      // Add more URLs here
    }
  };
  res.render("urls_index", templateVars);
});

// POST route for handling login
app.post("/login", (req, res) => {
  const { username } = req.body;
  // Set the username cookie
  res.cookie("username", username);
  // Redirect back to the /urls page
  res.redirect("/urls");
});

// POST route for handling logout
app.post("/logout", (req, res) => {
  // Clear the username cookie
  res.clearCookie("username");
  // Redirect back to the /urls page
  res.redirect("/urls");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
