import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import RegisterFormiK from "../../components/pure/forms/registerFormik";

const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>
            <RegisterFormiK></RegisterFormiK>
            <p>
                Do you have already a count? &nbsp;
                <Link replace to="/login">
                 Log in
                </Link>
                
            </p>
        </div>
    );
}

export default RegisterPage;
