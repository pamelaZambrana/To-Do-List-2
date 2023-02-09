import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";


const loginSchema=Yup.object().shape(
    {
        email: Yup
                    .string()
                    .email("Invalid email format")
                    .required("Email is required"),
        password: Yup
                    .string()
                    .required("Password is required")
    }
);


const LoginFormik = ({logged}) => {
    const initialCredentials={
        email:"",
        password:""
    };
const navigate=useNavigate();
    return (
        <div>
            <h1>Login Formik</h1>
            <Formik
                initialValues={
                    initialCredentials
                }
                validationSchema={ loginSchema }//Yup validation schema
                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
                localStorage.setItem("credentials",values);
                logged();
                navigate("/dashboard");
                console.log("logged-prev:",logged);

                }}            
            >
            {/* //we get props from Formik */}
            {({   values,
                touched, 
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                })=>(
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        {/* Email errors */}
                        {
                            errors.email && touched.email && 
                            (
                                <ErrorMessage name="email" component="div"></ErrorMessage>
                            )
                        }
                        {/* Passwoer errors */}
                        {
                            errors.password && touched.email && 
                            (
                                <ErrorMessage name="password" component="div"></ErrorMessage>
                            )
                        }
                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                        <button type="submit">Submit</button>
                        { isSubmitting ? (<p>Login your credentials!...</p>) : null}
                    </Form>
                )}
                
            </Formik>
        </div>
        
    );
}

export default LoginFormik;
