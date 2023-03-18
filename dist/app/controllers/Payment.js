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
Object.defineProperty(exports, "__esModule", { value: true });
exports.intents = void 0;
const stripeConfig_1 = require("../stripeConfig");
const intents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount } = req.body;
    try {
        const paymentIntent = yield stripeConfig_1.stripe.paymentIntents.create({
            amount: amount,
            currency: 'inr',
            automatic_payment_methods: {
                enabled: true,
            },
        });
        res.json({ paymentIntent: paymentIntent.client_secret });
    }
    catch (e) {
        res.status(400).json({
            error: e.message,
        });
    }
});
exports.intents = intents;
//# sourceMappingURL=Payment.js.map