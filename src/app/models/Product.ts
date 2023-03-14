
import { Schema, model } from 'mongoose'
import { IProduct, IProductDocument, IProductModel } from '../interfaces/interface.product';


const ProductSchema: Schema<IProductDocument> = new Schema({
    productId: { type: String || Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    sizes: { type: [Number], required: true },
    description: { type: String, required: true }


}, { timestamps: true })

ProductSchema.statics.buildProduct = (args: IProduct) => {
    return new Product(args)
}

const Product = model<IProductDocument, IProductModel>('products', ProductSchema)

export default Product;