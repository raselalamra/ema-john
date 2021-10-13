import React from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingInGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redireact_uri = location.state?.form || '/shop'

    const handleGoogleLogin = () => {
        signInUsingInGoogle()
        .then(result => {
            history.push(redireact_uri)
        })
    }

    return (
        <div className="login-from">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to="/register">Create Account</Link></p>
                <div>----------or----------</div>
                    <button 
                    className="btn-regular"
                    onClick={handleGoogleLogin}
                    >Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;