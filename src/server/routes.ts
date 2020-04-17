import * as express from 'express';
import { Book } from '../common/types';

export const router = express.Router();

const books: Book[] = [
    {
        id:0,
        title: "Les fous du roi",
        author: "Robert Penn Warren"
    },
    {
        id:1,
        title: "Faust",
        author: "Johann Wolfgang von Goethe"
    }
]

router.get('/books', (req, res, next) => {
    res.json(books);
});

router.get('/books/:id', (req: express.Request, res, next) => {
    const {id} = req.params
    res.json(id);
});