import { Document, Model } from "mongoose";

type ID = string | number;

export interface IOrder {
    productId: ID[];
    name: string;
    email: string;
    address: string;
    subTotal: number;
    deliveryFee: number;
    total: number;
    ref: string;
}

export interface IOrderDocument extends IOrder, Document { }

export interface IOrderModel extends Model<IOrderDocument> {
    buildOrder(args: IOrder): IOrderDocument;
}
