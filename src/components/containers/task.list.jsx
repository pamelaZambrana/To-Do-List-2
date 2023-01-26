import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/forms/task';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
    
    const defaultTask1 = new Task("Example1","Description1",true,LEVELS.NORMAL);
    const defaultTask2 = new Task("Example2","Description2",false,LEVELS.URGENT);
    const defaultTask3 = new Task("Example3","Description3",true,LEVELS.BLOCKING);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);
    //control del ciclo de vida
    useEffect(() => {
        console.log("Task state has been modified");
        setLoading(false);
        return () => {
            console.log("TaskList component is going to unmount...")
        };
    }, [tasks]);

    const changeCompleted= (id)=>{
        console.log("ToDo: cambiar el estado de una tarea")
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your tasks:</h5>
                    </div>
                    <div className='card-body' style={ {position:"relative", height:"400px"}} data-mdb-perfect-scrollbar="true">
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>     
                                    <th scope='col'>Priority</th>       
                                    <th scope='col'>Actions</th>        
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index)=> {
                                        return (
                                            <TaskComponent
                                                key= {index}
                                                task={task}
                                            >
                                            </TaskComponent>
                                        )
                                    }
                                )}                             
                            </tbody>
                            
                        </table>
                        <TaskForm></TaskForm>
                    </div>
                </div>
            </div>
            
        </div>
        /* TODO: aplicar un map para renderizar la lista */
    );
};

//como no le pasamos props, no necesitamos el propType


export default TaskListComponent;
