import express from 'express'
import { getAllProducts, getProduct, addProduct } from '../controllers/Product'


const router = express.Router();

router.post('/add-product', addProduct)
router.get('/', getAllProducts);
router.get('/:productId', getProduct)

export default router;