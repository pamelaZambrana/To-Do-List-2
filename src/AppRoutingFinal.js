import { useEffect, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from "./pages/404/NotFoundPage";
import Dashboard from "./pages/dashboard/dashboard";
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import TaskListPage from './pages/tasks/TaskListPage';

function AppRoutingFinal() {
   /* Change to valuo of sessionStorage */
   const [logged, setLogged] = useState(false);
  function logInOut(){
    setLogged(prev=>!prev);
  };
  console.log("logged:",logged);
  return (
    <div className="App">
        <Routes>
          <Route 
              path='/' 
              element={
                logged 
                ? (<Navigate from="/" replace to={"/dashboard"}/>) 
                : (<Navigate  from="/" replace to={"/login"}/>)}>
          </Route>
          {/* loging route */}
          <Route exact path='/login'element={<LoginPage logged={logInOut}/>}/>
          {/* Register form route */}
          <Route path='login/register' element={<RegisterPage/>}/>
          {/* Dashboard route */}
          <Route
              path='dashboard' 
              element={
                logged 
                ? (<Dashboard logged={logInOut}/>) 
                : (<Navigate replace to={"/login"}/>)}>
          </Route>
          {/* task list route */}
          <Route path='tasklist' element={<TaskListPage/>}/>
          {/* 404 route */}
          <Route element={<NotFoundPage/>}></Route>
        </Routes>
    </div>
  );
}

export default  AppRoutingFinal;

/* render = {
  (match)=>(<TaskDetailPage task={taskList[match.params.id-1]}></TaskDetailPage>)
} */