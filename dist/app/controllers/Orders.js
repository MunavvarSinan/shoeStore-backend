"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = exports.createOrder = void 0;
const Orders_1 = __importDefault(require("../models/Orders"));
const Product_1 = __importDefault(require("../models/Product"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, name, email, address, subTotal, deliveryFee, total, quantity } = req.body;
        const ref = (Math.random() + 1).toString(36).substring(7);
        console.log();
        const order = yield Orders_1.default.create({ productId, name, email, address, subTotal, deliveryFee, total, quantity, ref });
        return res.json({ success: true, order });
    }
    catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
});
exports.createOrder = createOrder;
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ref } = req.params;
    const order = yield Orders_1.default.find({ ref: ref });
    if (!order || order.length === 0) {
        return res.json({ success: false, message: 'No order found' });
    }
    else {
        console.log(order);
        const productDetails = yield Product_1.default.find({ id: { $in: order[0].productId } });
        order[0].productId = productDetails;
        return res.json({ success: true, order });
    }
});
exports.getOrder = getOrder;
//# sourceMappingURL=Orders.js.map