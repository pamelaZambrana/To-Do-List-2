import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';

import { LEVELS } from '../../../models/levels.enum';
import { Task } from "../../../models/task.class.js"

const TaskFormik = ({ add, lengthList  }) => {
    const initialValues=new Task("","",false,LEVELS.NORMAL) ;

    /* const levelRef=useRef(LEVELS.NORMAL); */

    const newTaskSchema=Yup.object().shape(
        {
            name: Yup
                        .string()   
                        .required("Task title is required"),
            description: Yup
                        .string(),
            level: Yup
                        .string()      
        }
    )

    function addTask(values){
        add(values);
    }

    
    return (
        <div>
             <h1>Create a task with Formik</h1>
            <Formik
                initialValues={
                    initialValues
                }
                validationSchema={ newTaskSchema }//Yup validation schema
                onSubmit={ addTask }            
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
                        <label htmlFor="name">Task title</label>
                        <Field
                            id="name"
                            className="form-control form-control-lg"
                            name="name"
                            placeholder="Task title"
                        />
                        {/* Email errors */}
                        {
                            errors.name && touched.name && 
                            (
                                <ErrorMessage name="name" component="div"></ErrorMessage>
                            )
                        }
                        
                        <label htmlFor="description">Task description</label>
                        <Field
                            id="description"
                            className="form-control form-control-lg"
                            name="description"
                            placeholder="Task description"
                        />
                        {/* Password errors */}
                        {
                            errors.description && touched.description && 
                            (
                                <ErrorMessage name="description" component="div"></ErrorMessage>
                            )
                        }
                        <label >Importance</label>
                        <Field
                            id="level"
                            as="select"
                            className="form-control form-control-lg"
                            name="level"
                            selection="true"
                        >
                            <option 
                                value ={ LEVELS.NORMAL }
                            >Normal</option>
                            <option 
                                value ={ LEVELS.URGENT }
                            >Urgent</option>
                            <option 
                                value ={ LEVELS.BLOCKING }
                            >Blocking</option>
                        </Field>

                        <button 
                            type="submit"
                            className='btn btn-success btn-lg ms-2'
                        >Create a new task</button>

                        {(lengthList > 0) ? "Add new task" : "Create your first task"}
                    </Form>
                )}
                
            </Formik>
        </div>
    );
}

TaskFormik.propTypes={
    add: PropTypes.func.isRequired,
    lengthList: PropTypes.number.isRequired
}
export default TaskFormik;




