import mongoose from "mongoose";
import Product from "./models/Product.js";

async function start() {

  await mongoose.connect("mongodb+srv://ns3321960_db_user:FpJzfGGEm1HRJ6Yt@cluster0.bszvldz.mongodb.net/?appName=Cluster0");

  console.log("MongoDB Connected");

  const product = new Product({
    name: "Premium Headphones",
    category: "Electronics",

    variants: [
      {
        sku: "HP-BL-001",
        color: "Black",
        price: 199.99,
        stock: 15
      },

      {
        sku: "HP-WH-001",
        color: "White",
        price: 209.99,
        stock: 8
      }
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

  console.log("Product Added");

  await product.updateStock("HP-BL-001", -2);

  console.log("Stock Updated");

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

  console.log("Aggregation Result:", result);

  const products = await Product.find();

  console.log(JSON.stringify(products, null, 2));

  mongoose.connection.close();
}

start();