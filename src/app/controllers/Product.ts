import Product from "../models/Product";
import { Request, Response } from "express";


export const addProduct = async (req: Request, res: Response) => {
   try {
      const { name, price, description, image, category } = req.body
      const product = await Product.create({ name, price, description, image, category })
      return res.json({ success: true, product })
   } catch (err) {
      console.log(err)
      res.json({ success: false, message: 'Something went wrong' })
   }
}

export const getAllProducts = async (req: Request, res: Response) => {
   try {
      const products = await Product.find()
      if (!products) return res.json({ success: false, message: 'No products found' })
      return res.json({ success: true, products })
   } catch (err) {

      console.log(err)
      res.json({ success: false, message: 'Something went wrong' })
   }
}

export const getProduct = async (req: Request, res: Response) => {
   try {
      const { productId } = req.params
      console.log(productId)
      const product = await Product.findOne({ id: productId })
      if (!product) return res.json({ success: false, message: 'No product found' })
      return res.json({ success: true, product })
   } catch (err) {
      console.log(err)
      res.json({ success: false, message: 'Something went wrong' })
   }
}
