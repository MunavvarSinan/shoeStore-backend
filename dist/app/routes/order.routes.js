"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Orders_1 = require("../controllers/Orders");
const router = express_1.default.Router();
router.post('/', Orders_1.createOrder);
router.get('/:ref', Orders_1.getOrder);
exports.default = router;
//# sourceMappingURL=order.routes.js.map