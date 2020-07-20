// Import express package
const express = require("express");

// Initialize express
const app = express();

// Set up a view engine
app.set("view engine", "ejs");

// Set a static folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

// Import express package
const express = require("express");
const upload = require("./upload");

app.get("/", (req, res) => {
  res.render("index");
});

// route to handle image upload
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.file);
      res.send("test");
    }
  });
});

// Define the port number
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
