"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = require("../controllers/Payment");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/intents', Payment_1.intents);
exports.default = router;
//# sourceMappingURL=payment.routes.js.map