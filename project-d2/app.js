const express = require("express");
const app = express();
const Product = require("./model/product");
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", "views");
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017").then(() => {
  console.log("db connected");
});

app.get("/", (req, res) => {
  res.render("product");
});

app.get("/product/new", (req, res) => {
  res.render("addProduct");
});

app.post("/product/new", (req, res) => {});

app.listen(PORT, () => console.log("Server running on port " + PORT));
