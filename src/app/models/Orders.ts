import { Schema, model } from 'mongoose'
import { IOrder, IOrderDocument, IOrderModel } from '../interfaces/interface.order';


const OrderSchema: Schema<IOrderDocument> = new Schema({
    productId: [{ type: String || Number, ref: 'products' }],
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    subTotal: { type: Number, required: true },
    deliveryFee: { type: Number, required: true },
    total: { type: Number, required: true },
    ref: { type: String, required: true }

}, { timestamps: true })

OrderSchema.statics.buildOrder = (args: IOrder) => {
    return new Order(args)
}

const Order = model<IOrderDocument, IOrderModel>('orders', OrderSchema)

export default Order;