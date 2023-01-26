/*Crear un componente tipo función y acceder a su estado privado a través de un hook y, además poder modificarlo*/

import React, {useState} from 'react';


const Ejemplo1 = () => {
    /*Valor inicial para un contador*/
    const initialValueCounter=0;

    /*Valor inicial para una persona*/
    const initialValuePerson ={
        name:"Pamela",
        email: "email@example.com"
    }
    /*Queremos que los valores iniciales sean parte del estado del componente para así poder gestionar su cambio y que este se vea reflejado en la vista del componente*/
    const [counter, setCounter] = useState(initialValueCounter);
    
    const [person, setPerson] = useState(initialValuePerson);

    /*Creamos funciones para actualizar los estados*/
    function upDateCounter(){
        setCounter(counter+1)
    }
    function upDatePerson(){
        setPerson({
            name: "Ronald",
            email: "email@example2.com",
        })
    }
  return (
    <div>
        <h1>Ejemplo de useState()</h1>
        <h2>Contador: {counter}</h2>
        <h2>Datos de la persona</h2>
        <h3>Nombre: {person.name}</h3>
        <h3>email:{person.email}</h3>
        <button onClick={upDateCounter}>Incrementar Contador</button>
        <button onClick={upDatePerson}>Actualizar datos</button>
    </div>
  )
}

export default Ejemplo1
