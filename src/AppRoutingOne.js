import { useEffect, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Routes, Route, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskListPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
function AppRoutingOne() {
   const taskList=[
    {
      id:1,
      name:"Task1",
      description: "My first task"
    },
    {
      id:2,
      name:"Task2",
      description: "My second task"
    }
   ]
    
  

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if(localStorage.length!==0){
      setLogged(true);
      console.log(logged);
    }else{
      setLogged(false);
      console.log(logged);
    };
  }, []);
  
  
  
  return (
    <div className="App">
        
      <div>
        <aside>
          <Link to="/">Home |</Link>
          {logged===false ? (<Link to="login"> Login |</Link>) : null}
          <Link to="about"> About |</Link>
          <Link to="faqs"> FAQs |</Link>
          <Link to="one404"> Not existing route |</Link>
          <Link to="/task/1"> Task1 |</Link>
          <Link to="/task/2"> Task2 |</Link>
          
        </aside>
      </div>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='login' element={logged===false ? <LoginPage/> : <Navigate replace to={"/"}/>}/>
          <Route 
              path='profile' 
              element={logged===true ? (<ProfilePage/>) : (<Navigate replace to={"/login"}/>)}>

          </Route>
          <Route path='about' element={<AboutPage/>}></Route>
          <Route path='faqs' element={<AboutPage/>}></Route>
          <Route path="tasks" element={<TaskPage/>}></Route>
          <Route path='task'>
              <Route path=':id' element={<TaskDetailPage task={taskList}/>}></Route>
          </Route>
          
          {/*v 404 page not found */}
          <Route path = "*" element={<NotFoundPage/>}></Route>
        </Routes>
      </main>
      

    </div>
  );
}

export default  AppRoutingOne;

/* render = {
  (match)=>(<TaskDetailPage task={taskList[match.params.id-1]}></TaskDetailPage>)
} */