import express from 'express'
import { getOrder, createOrder } from '../controllers/Orders'


const router = express.Router();

router.post('/', createOrder);
router.get('/:ref', getOrder)

export default router;