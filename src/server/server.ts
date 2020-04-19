import * as express from 'express';
import {BooksRouter} from './books.routes';
import { adminRouter } from './admin.routes';
import { authRouter } from './auth.routes';
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'
import { passportConfig } from './config/passport';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(session({secret: 'webapp'}))
passportConfig(app)
app.use(express.static('public'));

app.use('/admin', adminRouter)
app.use('/books', BooksRouter);
app.use('/auth', authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
