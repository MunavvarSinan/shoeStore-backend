import { Request, Response } from 'express';
import { stripe } from '../stripeConfig';



export const intents = async (req: Request, res: Response) => {
    const { amount } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, // it should be an integer
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.json({ paymentIntent: paymentIntent.client_secret });
    } catch (e) {
        res.status(400).json({
            error: e.message,
        });
    }
}