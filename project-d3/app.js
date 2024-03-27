const express = require("express");
const app = express();
const Product = require("./model/product");
const PORT = 5000;
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", "views");
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/secn").then(() => {
  console.log("db connected");
});

app.get("/product", async (req, res) => {
  const allProducts = await Product.find();
  console.log(allProducts);
  res.render("product");
});

app.get("/product/new", (req, res) => {
  res.render("addProduct");
});

app.post("/product/new", async (req, res) => {
  const { productName, price, description, imageUrl } = req.body;

  const newProduct = await Product.create({
    productName,
    price,
    description,
    imageUrl,
  });

  newProduct.save();
  res.redirect("/product/new");
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
