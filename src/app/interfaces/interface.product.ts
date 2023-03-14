import { Document, Model } from "mongoose";

type ID = string | number;

export interface IProduct {
    productId: ID;
    name: string;
    image: string;
    images: [string];
    category: string;
    price: number;
    brand: string;
    sizes: [number];
    description: string;
}

export interface IProductDocument extends IProduct, Document { }

export interface IProductModel extends Model<IProductDocument> {
    buildProduct(args: IProduct): IProductDocument;
}
