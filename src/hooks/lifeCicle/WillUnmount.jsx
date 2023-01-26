/*Ejemplo de uso del método componentWIllUnmount para componente clase y ejemplo de uso de hooks para componente funcional (cuando el componente desaparecerá)*/

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {
    componentWillUnmount(){
        console.log("Comportamientocuando  antes de que el componente desaparezca")
    }
    
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    };
};

export const WillUnmountHook = () => {
    useEffect(()=>{
        return()=>{
            console.log("Comportamientocuando  antes de que el componente desaparezca")
        };
        
    },[]);
    
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}