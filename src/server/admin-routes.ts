import * as express from 'express';
import {Request, Response} from 'express';
import { MongoClient } from "mongodb"
import { books } from './data';
export const adminRouter = express.Router();

adminRouter.get('/', (req: Request, res: Response) => {
    (async () => {
        const uri = "mongodb+srv://admin:admin@cluster0-txqls.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, {  useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(async err => {
            const collection = await client.db("test").collection("books").insertMany(books);
            res.json(collection)
            client.close();
        });
    })()
})
