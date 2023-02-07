import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, lengthList }) => {
    const nameRef=useRef("");
    const descriptionRef=useRef("");
    const levelRef=useRef(LEVELS.NORMAL);

    const normalStyle={
        color: "blue",
        fontWeight: "bold"
    }
    const urgentStyle={
        color:"yellow",
        fontWeight:"bold"
    }
    const blockingStyle={
        color:"tomato",
        fontWeight: "bold"
    }
    function addTask(e){
        e.preventDefault();
        const newTask=new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
        <form 
            onSubmit={ addTask }
            className="d-flex justify-content-cneter align-items-center mb-4"
        >
            <div className='form-outline flex-fill'>
                <input
                    placeholder='Task title'
                    ref={ nameRef }
                    id="inputName"
                    type="text"
                    className="form-control form-control-lg"
                    required
                    autoFocus    
                ></input>
                <input
                    placeholder='Description'
                    ref={ descriptionRef }
                    id="inputDescription"
                    type="text"
                    className="form-control form-control-lg"
                    required   
                ></input>
                {/* <label 
                    htmlFor='selectLevel'
                    className='sr-only'
                >
                    Priority
                </label> */}
                <select
                    ref={ levelRef }
                    defaultValue={ LEVELS.NORMAL }
                    id="selectLevel"
                    className="form-control form-control-lg" 
                >
                    <option 
                        value ={ LEVELS.NORMAL}
                        style={ normalStyle }
                    >Normal</option>
                    <option 
                        value ={ LEVELS.URGENT}
                        style={ urgentStyle }
                    >Urgent</option>
                    <option 
                        value ={ LEVELS.BLOCKING}
                        style={ blockingStyle }
                    >Blocking</option>
                </select>
                <button 
                type='submit'
                className='btn btn-success btn-lg ms-2'
                >
                {(lengthList > 0) ? "Add new task" : "Create your first task"}
                </button>
            </div>
        </form>
    );
};

TaskForm.propTypes={
    add: PropTypes.func.isRequired,
    lengthList: PropTypes.number.isRequired
}

export default TaskForm;
