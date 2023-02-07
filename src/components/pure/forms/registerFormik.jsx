import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User } from "../../../models/user.class";
import {ROLES} from "../../../models/roles.enum";
const RegisterFormik = () => {
    let user = new User();
    const initialValues={
        userName: "",
        email: "",
        password: "",
        confirm:"",
        role:ROLES.USER,
    };
    const registerSchema=Yup.object().shape(
        {
            userName: Yup
                        .string()   
                        .min(6,"User Name too short")
                        .max(12,"User Name too long")
                        .required("User Name is required"),
            email: Yup
                        .string()
                        .email("Invalid email format")
                        .required("Email is required"),
            role: Yup
                    .string()
                    .oneOf([ROLES.USER, ROLES.ADMIN], "You must select an user role")
                    .required("Role is required"),
            password: Yup
                        .string()
                        .min(8,"Password too short")
                        .required("Password is required"),
            confirm: Yup
                        .string()
                        .when("password",{
                            is: value => (value && value.length >0 ? true : false),
                            then: Yup.string().oneOf(
                                [Yup.ref("password")],
                                "Passwords must match!"
                            )
                        })
                        .required("You must confirm the password")           
        }
    )
    const submit = (values)=>{
        alert("Register user");
    }

    return (
        <div>
            <h4>Register Formik</h4>
            
            <Formik
                validationSchema={registerSchema}
                initialValues={initialValues}
                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
                }}
            >
             {({   values,
                touched, 
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                })=>(
                    <Form>
                        <label htmlFor="userName">User Name</label>
                        <Field 
                            id="userName" 
                            type="text" 
                            name="userName" 
                            placeholder="Your user name"
                        ></Field>
                        {/* User name errors */}
                        {
                            errors.userName && touched.userName && 
                            (
                                <ErrorMessage name="userName" component="div"></ErrorMessage>
                            )
                        }
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
                        
                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                        {/* Password errors */}
                        {
                            errors.password && touched.email && 
                            (
                                <ErrorMessage name="password" component="div"></ErrorMessage>
                            )
                        }

                        <label htmlFor="confirm ">Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm password"
                            type="password"
                        />
                        {/* Confirm Password errors */}
                        {
                            errors.confirm && touched.confirm && 
                            (
                                <ErrorMessage name="confirm" component="div"></ErrorMessage>
                            )
                        }

                        <button type="submit">Register new user</button>
                        { isSubmitting ? (<p>Sending your credentials!...</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterFormik;
