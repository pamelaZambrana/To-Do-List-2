import React, { useRef } from 'react';

const Child = ({ name, send , upDate}) => {
    const messageRef = useRef("");
    const nameRef = useRef("");

    function pressButton(){
        const text=messageRef.current.value;
        alert(`Texgt in input: ${text}`);
    };

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    };

    function submitName(e){
        e.preventDefault();
        upDate(nameRef.current.value);
    };

    
    return (
        <div style={{background:"pink", padding:"20px"}}>
            <p
                onMouseOver={ ()=> console.log("on mouse over")}
            >
                Hello { name }
            </p>
            <button
                onClick={ ()=> console.log("pressed button 1") }
            >
                Botón 1
            </button>
            <button
                onClick={ pressButton }
            >
                Botón 2
            </button>
            <button
                onClick={ ()=>pressButtonParams("hello") }
            >
                Botón 3
            </button>
            <input
                placeholder="send a text to your father"
                onFocus={()=>console.log("input focused")}
                onChange={(e)=>console.log("input changed:", e.target.value)}
                onCopy={()=>console.log("copied text from input")}
                ref={ messageRef }
            ></input>
            <button
                onClick={ ()=> send(messageRef.current.value) }
            >
                send message
            </button>
            <div style={{margin:"20px"}}>
                <form onSubmit={ submitName }>
                    <input
                        placeholder='new name'
                        ref={ nameRef }
                    >
                    </input>
                    <button type='submit'>UpDate Name</button>
                </form>

            </div>
        </div>
    );
}

export default Child;
