import * as express from 'express';
import {Request, Response} from 'express';
import { MongoClient } from "mongodb"
import * as passport from 'passport' 

export const authRouter = express.Router();

authRouter.post('/signUp', (req: Request, res: Response) => {
    const {username, password} = req.body;
    (async () => {
        const uri = "mongodb+srv://admin:admin@cluster0-txqls.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, {  useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(async err => {
            if(err) console.log(err.message)

            const usersCol = await client.db("test").collection("users");
            const user = {username, password}
            const result = await usersCol.insertOne(user);
            req.login(result.ops[0], () => {
                res.redirect('/auth/profile')
            })
            client.close();
        });
    })()
})

authRouter.post('/signIn',
    passport.authenticate('local',{
        successRedirect: '/auth/profile',
        failureRedirect: '/'
    }))

authRouter.get('/profile', (req: Request, res: Response, next) => {
    if(req.user) next()
    else res.redirect('/')
    
    res.json(req.user)
})