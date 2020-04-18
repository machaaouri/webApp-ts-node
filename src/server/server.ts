import * as express from 'express';
import {router} from './routes';
import { adminRouter } from './admin-routes';

const app = express();

app.use(express.static('public'));
app.use('/admin', adminRouter)
app.use('/books', router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
