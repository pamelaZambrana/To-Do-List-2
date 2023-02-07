import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/forms/task';
import TaskForm from '../pure/forms/taskForm';
import TaskFormik from '../pure/forms/taskFormik';

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
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        
        return () => {
            console.log("TaskList component is going to unmount...")
        };
    }, [tasks]);

    const changeCompleted= (id)=>{
        console.log("ToDo: cambiar el estado de una tarea")
    }

    function completeTask(task){
        console.log("Complete this task:", task);
        const index=tasks.indexOf(task);
        const tempTasks=[...tasks];
        tempTasks[index].completed=!tempTasks[index].completed;
        /*Update the state of the component and it will update the 
        iteration of the task in order to show the updated task*/
        setTasks(tempTasks);
    };

    function deleteTask(task){
        console.log("Delete this task:", task);
        const index=tasks.indexOf(task);
        const tempTasks=[...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }
    function addTask(task){
        console.log("Add this task:", task);
        const tempTasks=[...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    let Table= ()=>{
        return(
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
                                    complete={ completeTask }
                                    removeTask={ deleteTask }
                                >
                                </TaskComponent>
                            )
                        }
                    )}                             
                </tbody>
                            
            </table>
        );
    };

    let tasksTable;
    if(tasks.length>0){
        tasksTable=<Table></Table>
    }else{
       tasksTable = (
       <div>
            <h3>There are not task to show</h3>
            <h4>Please create a task.</h4>
       </div>
       )
    };
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your tasks:</h5>
                    </div>
                    <div className='card-body' style={ {position:"relative", height:"400px"}} data-mdb-perfect-scrollbar="true">
                        {loading ? <p className="placeholder-glow">Loading tasks...<span className="placeholder col-12"></span></p>: tasksTable }
                        
                    </div>
                </div>
                <TaskFormik
                    add={ addTask }
                    lengthList={tasks.length}
                ></TaskFormik>
            </div>
            
        </div>
        /* TODO: aplicar un map para renderizar la lista */
    );
};

//como no le pasamos props, no necesitamos el propType


export default TaskListComponent;
