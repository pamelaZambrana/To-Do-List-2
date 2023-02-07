import React, { useState } from 'react';




const OptionalRender = () => {
    const [access, setAccess] = useState(true);
    const [nMessage, setNMessage] = useState(0);
    let optionalButton;
    const loggedStyle={
        backgroundColor:"green",
        color: "white"
    }
    const unloggedStyle={
        backgroundColor:"gray",
        color: "white"
    }
    //renderizando elementos
   /*  function upDateAccess(){
        setAccess(!access);
    }

    if (access){
        optionalButton=<button onClick={ upDateAccess }>Log Out</button>
    }else{
        optionalButton = <button onClick={ upDateAccess }>Log In</button>
    } */
     //Convirtiendo los elementos en componentes
    
    const LogInButton=({ logOut, propStyle })=>{
        return(
            <button onClick={ logOut } style={ loggedStyle }>Log In</button>
        );
    };
    const LogOutButton=({ logIn, propStyle })=>{
        return(
            <button onClick={ logIn }  style={ unloggedStyle } >Log Out</button>
        );
    };

    function logOut(){
        setAccess(false);
    };
    function logIn(){
        setAccess(true);
    };

    if (access){
        optionalButton=<LogInButton logOut={ logOut } propStyle={loggedStyle}></LogInButton>
    }else{
        optionalButton = <LogOutButton logIn = { logIn } propStyle={unloggedStyle}></LogOutButton>
    } 

    //mensajes sin leer
    let addMessages=()=>{
        setNMessage(nMessage+1);
    };
    

    return (
        <div>
            { optionalButton }
            { access ? (
                <div>
                {nMessage > 0 && nMessage ===1 && <p> You have {nMessage} new message </p>}{/* // permite concatenar condiciones */}
                {nMessage > 1 && <p> You have {nMessage} new messages </p>}
                {nMessage === 0 && <p> There aren't new messages. </p>}
                {/* operador ternario */}
                {nMessage>10 ? <p>You have many messages unreaded</p> : <p>You have few new messages</p>}
                <button onClick={ addMessages }>Add new Messages</button>
                </div>
            ) : null
            }

        </div>
    );
}

export default OptionalRender;
