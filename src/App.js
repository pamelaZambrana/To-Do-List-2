import './App.css';
import TaskListComponent from './components/containers/task.list';
import "./styles/taskStyle.scss"
import Father from './components/containers/father';
/* import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2'; */
/* import Greeting from './components/pure/greeting'; */
/* import GreetinfF from './components/pure/greetinfF'; */
/* import MyComponentWithContext from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4'; */
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente Greeting.jsx */}
        {/* <Greeting name="Pamela"></Greeting> */}
        {/* <GreetinfF name="Pame"></GreetinfF> */}
        {/* componente de lista de tarea */}
        
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MyComponentWithContext></MyComponentWithContext> */}
        {/* <Ejemplo4 name="pamela">
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}
      {/*</header>*/}
      {/* <Father></Father> */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
