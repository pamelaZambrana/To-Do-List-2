/*Ejemplo de uso de método componenteDidUpDate en componente de clase y uso de hook en componente funcional*/

import React, { Component, useEffect } from 'react';

export class DidUpDate extends Component {
    componentDidUpdate(){
        console.log("Comportamientocuando  el componente recibe nuevos props o cambio en su estado")
    }
    
    render() {
        return (
            <div>
                <h1>DidUpDate</h1>
            </div>
        );
    };
};

export const DidUpDateHook = () => {
    useEffect(()=>{
        console.log("Comportamientocuando  el componente recibe nuevos props o cambio en su estado")
    })
    
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}