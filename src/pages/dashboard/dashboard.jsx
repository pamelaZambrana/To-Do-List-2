import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CopyRight from '../../components/pure/CopyRight';
import MenuListItems from '../../components/pure/MenuListItems';
import TaskListComponent from '../../components/containers/task.list';

const Dashboard = ({logged}) => {
    const navigate=useNavigate();
    const logOut = ()=>{
        logged();
        navigate("/login");
        console.log("logged-prev:",logged)
    }
    return (
        <div>
            <TaskListComponent></TaskListComponent>
            {/* <MenuListItems></MenuListItems> */}
            <Button variant="contained" onClick={ logOut }>Log Out</Button>
            <CopyRight></CopyRight>
        </div>
    );
}

export default Dashboard;
