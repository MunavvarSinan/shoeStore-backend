"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    productId: [{ type: String || Number, ref: 'products' }],
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    subTotal: { type: Number, required: true },
    deliveryFee: { type: Number, required: true },
    total: { type: Number, required: true },
    ref: { type: String, required: true }
}, { timestamps: true });
OrderSchema.statics.buildOrder = (args) => {
    return new Order(args);
};
const Order = (0, mongoose_1.model)('orders', OrderSchema);
exports.default = Order;
//# sourceMappingURL=Orders.js.map