import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class';
import "../../../styles/taskStyle.scss";
import { LEVELS } from '../../../models/levels.enum';


const TaskComponent = ({task, complete, removeTask}) => {
    useEffect(() => {
        console.log("tarea creada")
        return () => {
            console.log(`task: ${task.name} is going to amount`)
        };
    }, [task]);
    
    /*Function that returns Badge depending on the level task*/
    function taskLevelBadge(){
        switch (task.level){
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>{ task.level }</span>
                </h6>)    
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>{ task.level }</span>
                </h6>)    
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>{ task.level }</span>
                </h6>)    
            default:
                break;
        };
    };

    function taskCompletedIcon(){
        if(task.completed){
            return(
            <i 
                onClick={ ()=>complete(task) }
                className='bi bi-toggle-on task-action' 
                style={{ color:"green" }}
            >

            </i>
            );
        }else{
            return(
                <i 
                onClick={ ()=>complete(task) }
                className='bi bi-toggle-off task-action' 
                style={{ color:"gray" }}
                >
                </i>
            );
        };
    };

    return (
        <tr className={task.completed ? " fw-normal task-completed" : "fw-normal task-pending"}>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
            {/*Todo: sustituir por un badge distinto*/}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
            {/*Todo: sustituir por íconos*/}
                
                {taskCompletedIcon()}
                <i 
                    className='bi bi-trash task-action' 
                    style={{ color:"tomato", fontSize:"16px" }}
                    onClick={()=>removeTask(task)}
                >
                </i>
            </td>
            
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
};


export default TaskComponent;
