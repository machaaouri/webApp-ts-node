import * as React from 'react';

export const SignIn = ({ }) => {

    return (
        <form className="form-horizontal" action='/auth/signIn' method="POST">
            <div className="control-group">
                <label className="control-label" htmlFor="username">Username</label>
                <div className="controls">
                    <input type="text" id="username" name="username" placeholder="" className="input-xlarge" />
                </div>
            </div>
            
            <div className="control-group">
                <label className="control-label" htmlFor="password">Password</label>
                <div className="controls">
                    <input type="password" id="password" name="password" placeholder="" className="input-xlarge" />
                </div>
            </div>

            <div className="control-group">
                <div className="controls">
                    <button className="btn btn-success">Sign in</button>
                </div>
            </div>
        </form>
                        )
}