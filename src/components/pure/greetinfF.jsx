import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetinfF = (props) => {
    //breve intro a useState
    //[variable, método de actualización]=useState(valor inicial)
    const [age, SetAge]=useState(29)

    const birthday=()=>{
        //método de actualización
        SetAge(age+1)
    }
    return (
        <div>
            <h1>
                    hola {props.name} desde componente funcional!
                </h1>
                {<h2>
                    Tu edad es de: { age }
                </h2> }
                { <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div> }
        </div>
    );
};


GreetinfF.propTypes = {
    name: PropTypes.string
};


export default GreetinfF;
