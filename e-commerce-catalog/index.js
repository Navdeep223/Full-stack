import express from "express";
import mongoose from "mongoose";
import Product from "./models/Product.js";

const app = express();
const PORT = process.env.PORT || 3000;

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Demo route for experiment
app.get("/", async (req, res) => {

  const product = new Product({
    name: "Premium Headphones",
    category: "Electronics",
    variants: [
      { sku: "HP-BL-001", color: "Black", price: 199.99, stock: 15 },
      { sku: "HP-WH-001", color: "White", price: 209.99, stock: 8 }
    ],
    reviews: [
      {
        userId: new mongoose.Types.ObjectId(),
        rating: 5,
        comment: "Excellent sound quality"
      }
    ]
  });

  product.calculateAvgRating();

  await product.save();

  await product.updateStock("HP-BL-001", -2);

  const result = await Product.aggregate([
    { $unwind: "$variants" },
    {
      $group: {
        _id: "$category",
        avgPrice: { $avg: "$variants.price" },
        totalStock: { $sum: "$variants.stock" }
      }
    }
  ]);

  const products = await Product.find();

  res.json({
    message: "Experiment 2.1.3 Output",
    aggregation: result,
    products: products
  });

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});