"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Product_1 = require("../controllers/Product");
const router = express_1.default.Router();
router.post('/add-product', Product_1.addProduct);
router.get('/', Product_1.getAllProducts);
router.get('/:productId', Product_1.getProduct);
exports.default = router;
//# sourceMappingURL=ProductRoutes.js.map