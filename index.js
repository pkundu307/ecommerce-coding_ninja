
import express from "express";
import product from "./routes/product.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import connectToDatabase from "./config/database.js";
import Products from "./models/products.js";

const allproduct=Products.find({}).exec();
const app = express();

app.use(express.json());
connectToDatabase();
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.get( "/" ,(req, res) => {
    try {
      const products = Products.find({}).exec();
      res.json({ products:products });
    } catch (error) {
      console.error("Error retrieving products", error);
      res.status(500).send("Error retrieving products");
    }
  });
    // Set up routes here
    app.use("/api", product);
    // Start the server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  
  
