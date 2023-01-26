import React, { Component, useEffect } from 'react';


const AllCycles = () => {
   useEffect(() => {
        console.log("componente creado")
        const intervalID=setInterval(()=>{
            document.title=`${new Date()}`
            console.log("actualización del componente")
        },1000);
    return () => {
        console.log("Componente va a desaparecer");
        document.title="tiempo detenido"
        clearInterval(intervalID);
    };
   }, []);
   
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
