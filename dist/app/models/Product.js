"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    productId: { type: String || Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    sizes: { type: [Number], required: true },
    description: { type: String, required: true }
}, { timestamps: true });
ProductSchema.statics.buildProduct = (args) => {
    return new Product(args);
};
const Product = (0, mongoose_1.model)('products', ProductSchema);
exports.default = Product;
//# sourceMappingURL=Product.js.map