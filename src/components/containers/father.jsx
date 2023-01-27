import React, {useState} from 'react';
import Child from '../pure/forms/child';

const Father = () => {

    const [name, setName] = useState("pamela");
    function showMessage(text){
        alert(`Message received: ${text}`)
    }

    function upDateName(newName){
        setName(newName);
    };

    return (
        <div style={ {background: "tomato", padding: "10px"} }>
           <Child 
           name = { name }
           send={ showMessage }
           upDate={ upDateName }
           ></Child> 
        </div>
    );
}

export default Father;
