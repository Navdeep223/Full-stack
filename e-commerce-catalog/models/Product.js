import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  rating: Number,
  comment: String
});

const variantSchema = new mongoose.Schema({
  sku: String,
  color: String,
  price: Number,
  stock: Number
});

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  variants: [variantSchema],
  reviews: [reviewSchema],
  avgRating: Number
});

productSchema.index({ category: 1 });

productSchema.methods.updateStock = function (sku, quantity) {

  const variant = this.variants.find(v => v.sku === sku);

  if (!variant) {
    throw new Error("Variant not found");
  }

  variant.stock += quantity;

  return this.save();
};

productSchema.methods.calculateAvgRating = function () {

  if (this.reviews.length === 0) return;

  const total = this.reviews.reduce((sum, r) => sum + r.rating, 0);

  this.avgRating = total / this.reviews.length;
};

export default mongoose.model("Product", productSchema);