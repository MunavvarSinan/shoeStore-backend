
import Order from "../models/Orders"
import Product from "../models/Product"
import { Request, Response } from "express"

export const createOrder = async (req: Request, res: Response) => {
    const { productId, name, email, address, subTotal, deliveryFee, total, quantity } = req.body
    const ref = (Math.random() + 1).toString(36).substring(7)
    console.log()
    const order = await Order.create({ productId, name, email, address, subTotal, deliveryFee, total, quantity, ref })
    return res.json({ success: true, order })
}

export const getOrder = async (req: Request, res: Response) => {
    const { ref } = req.params

    const order = await Order.find({ ref: ref })
    if (!order || order.length === 0) {
        return res.json({ success: false, message: 'No order found' })
    } else {
        console.log(order)
        const productDetails = await Product.find({ id: { $in: order[0].productId } })
        order[0].productId = productDetails as any
        return res.json({ success: true, order })
    }

}