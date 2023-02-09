import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import LoginFormik from "../../components/pure/forms/loginFormik"
const LoginPage = ({logged}) => {
    return (
        <div>
            
            <h1>Login Page</h1>
            <LoginFormik logged={logged}></LoginFormik>
            <p>
                First time?&nbsp;
                <Link replace to="/login/register">
                 Register
                </Link>
                &nbsp;now.
            </p>
            
        </div>
    );
}

export default LoginPage;
