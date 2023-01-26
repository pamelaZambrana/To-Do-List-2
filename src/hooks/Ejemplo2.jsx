/*Ejempo de uso de: useState (), useRef(), useEffect()*/
import React,{useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    //creamos dos contadores distintos
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    /*Creamos una referencia para asociar una variable con un elemento del DOM del componente (vista HTML) sustituye al Jquery*/
    const myRef=useRef();
    
    function increment1(){
        setCounter1(counter1+1);
    };

    function increment2(){
        setCounter2(counter2+1);
    };
    /*Trabajando con useEffect()*/
    //CASO1:
    /*Cada vez que haya un cambio en el estado del componente, se ejecuta aquello que esté dentro del useEffect()*/
    /* useEffect(()=>{
        console.log("cambio en el estado del componente");
        console.log("mostrando referencia a elemento del DOM");
        console.log(myRef)
    }) */

    //CASO2:
    /*Ejecutar sólo cuando se cambia el contador 1, cada vez que haya un cambio en caso 1, se ejecuta el use effect, en caso de que cambie el contador2, no se ejecuta*/
    /* useEffect(()=>{
        console.log("cambio en el estado del componente");
        console.log("mostrando referencia a elemento del DOM");
        console.log(myRef)
    },[counter1]); */
    //CASO2:
    /*Ejecutar sólo cuando se cambia el contador 1 o el contador 2.*/
    useEffect(()=>{
        console.log("cambio en el estado del componente");
        console.log("mostrando referencia a elemento del DOM");
        console.log(myRef)
    },[counter1, counter2]);

    return (
        <div>
            <h1>Ejemplo de useState, useRef, UseEffect</h1>
            <h2>Contador1:{counter1}</h2>
            <h2>Contador2: {counter2}</h2>
            {/*Elemento referenciado*/}
            <h4 ref={myRef}>
                ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={increment1}>Incrementar contador 1</button>
                <button onClick={increment2}>Incrementar contador 2</button>

            </div>
        </div>
    );
}

export default Ejemplo2;

