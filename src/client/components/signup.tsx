import * as React from 'react';

export const SignUp = ({ }) => {

    return (
        <form className="form-horizontal" action='/auth/signUp' method="POST">
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
                    <p className="help-block">Password should be at least 4 characters</p>
                </div>
            </div>

            <div className="control-group">
                <div className="controls">
                    <button className="btn btn-success">Sign up</button>
                </div>
            </div>
        </form>
                        )
}