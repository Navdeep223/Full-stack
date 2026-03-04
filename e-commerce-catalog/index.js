app.get("/", async (req, res) => {

  let product = await Product.findOne({ name: "Premium Headphones" });

  if (!product) {

    product = new Product({
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
  }

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