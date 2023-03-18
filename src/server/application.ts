import express, { Response } from 'express';
import cors from 'cors'
import { Server } from 'http';
import { connect } from './database';
import Product from '../app/routes/product.routes';
import Order from '../app/routes/order.routes';
import Payment from '../app/routes/payment.routes';

export default class Application {
    public app: express.Application;
    public server: Server;

    public connect = async (): Promise<void> => {
        try {
            connect();

        } catch (err) {
            console.error('📌 Could not connect to the database', err);
            throw Error(err);
        }
    };
    public init = async (): Promise<void> => {
        this.app = express();
        this.app.use(cors());

        try {
            this.app.use(express.json());
            this.app.get('/', (_, res: Response) => {
                console.log(res)
                res.send('Hello World!');
            }
            );
            this.app.use('/api/product', Product);
            this.app.use('/api/order', Order);
            this.app.use('/api/payment', Payment);
            const port = process.env.PORT || 4000;
            this.server = this.app.listen(port, () => {
                console.log(`🚀 Server listening on port ${port}`);
            }
            );
        } catch (err) {
            console.error('📌 Could not start the server', err);
            throw Error(err);
        }
    }
}