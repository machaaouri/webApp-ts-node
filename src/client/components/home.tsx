import * as React from 'react';
import { SignUp } from './signup';
import { SignIn } from './signin';

export const Home = () => {

    return (
        <div>
           <SignUp />
           <SignIn />
        </div>
    )
}