import * as express from 'express';
import {Request, Response, NextFunction} from 'express';
import { MongoClient, ObjectID } from "mongodb"

export const BooksRouter = express.Router();

BooksRouter.use((req: Request, res: Response,next: NextFunction) => {
    if(req.user) next()
    else res.redirect('/');
})

BooksRouter.get('/', (req, res, next) => {
    (async () => {
        const uri = "mongodb+srv://admin:admin@cluster0-txqls.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        client.connect(async err => {
            if(err) console.log(err.message)
            
            const collection = await client.db("test").collection("books").find().toArray()
            res.json(collection)
            client.close();
        });
    })()
});

BooksRouter.get('/:id', (req: express.Request, res, next) => {
    const { id } = req.params
    const uri = "mongodb+srv://admin:admin@cluster0-txqls.mongodb.net/test?retryWrites=true&w=majority";

    (async () => {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(async err => {
            if(err) console.log(err.message)
            
            const book = await client.db("test").collection("books").findOne({_id: new ObjectID(id)})
            res.json(book)
            client.close();
        });
    })()

});