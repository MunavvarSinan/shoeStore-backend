import { intents } from '../controllers/Payment';
import express from 'express';

const router = express.Router();

router.post('/intents', intents);

export default router;