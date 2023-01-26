/*Ejemplo usando useState() y useContext()*/

import React, {useState, useContext} from 'react';
/*@returns componente 1. Dispone de un contexto que va a tener un valor que recibe desde el padre*/
const myContext=React.createContext(null);
const Component1 = () => {

    /*Inicializamos un estado vacio que va a llenarse con los datos del contexto padre*/
    const state=useContext(myContext);

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            <Component2></Component2>
        </div>
    );
};

const Component2 = () => {

    const state=useContext(myContext);

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}


const MyComponentWithContext = () => {
    const initialState={
        token: "1234557",
        sesion: 1
    };

    //Creamos el estado en este componente
    const [sessionData, setSesionData] = useState(initialState);

    function upDateSesion(){
        setSesionData(
            {
                token:"JML123456",
                sesion:sessionData.sesion+1,
            }
        )
    }

    return (
        <myContext.Provider
            value={sessionData}
        >
            {/*Todo lo que está aquí puede leer los dados de de sesionData. Además si se actualiza, los componentes de aquí, también lo actualiza*/}
            <h1>Ejemplo de useState() y useContext()</h1>
            <Component1></Component1>
            <button onClick={upDateSesion}>Actualizar sesión</button>
        </myContext.Provider>
    );
}

export default MyComponentWithContext;
