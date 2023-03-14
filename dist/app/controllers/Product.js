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
exports.getProduct = exports.getAllProducts = exports.addProduct = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, description, image, category } = req.body;
        const product = yield Product_1.default.create({ name, price, description, image, category });
        return res.json({ success: true, product });
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: 'Something went wrong' });
    }
});
exports.addProduct = addProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.default.find();
        if (!products)
            return res.json({ success: false, message: 'No products found' });
        return res.json({ success: true, products });
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: 'Something went wrong' });
    }
});
exports.getAllProducts = getAllProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        console.log(productId);
        const product = yield Product_1.default.findOne({ id: productId });
        console.log(product);
        return res.json({ success: true, product });
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: 'Something went wrong' });
    }
});
exports.getProduct = getProduct;
//# sourceMappingURL=Product.js.map