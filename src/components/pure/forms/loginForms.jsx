/*Componenete que va a conter un formulario para autenticación de usuarios*/

import React, {useState} from "react";


const LoginForms = () => {
    const initialCredentilas=[
        {
            user: "",
            password: ""
        },
    ];

    const [credentials, setCredentials] = useState(initialCredentilas);
    

    return (
        <div>
            
        </div>
    );
}

export default LoginForms;
