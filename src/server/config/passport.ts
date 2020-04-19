import {Express} from 'express';
import * as passport from 'passport'
import { Strategy } from 'passport-local';
import { MongoClient } from 'mongodb';

export const passportConfig = (app: Express) => {
    app.use(passport.initialize())
    app.use(passport.session())

    passport.use('local', new Strategy({
        usernameField: 'username',
        passwordField: 'password'
    },(username, password, done) => {
        (async () => {
            const uri = "mongodb+srv://admin:admin@cluster0-txqls.mongodb.net/test?retryWrites=true&w=majority";
            const client = new MongoClient(uri, {  useNewUrlParser: true, useUnifiedTopology: true });
            client.connect(async err => {
                if(err) console.log(err.message)
    
                const usersCol = client.db("test").collection("users");
                const user = await usersCol.findOne({username});
                if(user.password === password) {
                    done(null, user)
                } else {
                    done(null, false)
                }
                client.close();
            });
        })()       
    }))

    // Serialize user in Session
    passport.serializeUser((user, done) => {
        done(null, user)
    })

    // Deserialize user from session
    passport.deserializeUser((user, done) => {
        done(null, user)
    })
}