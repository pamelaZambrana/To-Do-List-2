import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const location = useLocation();
    console.log("we are in:", location.pathname);
    const navigate=useNavigate();
    return (
        <div>
            <h1>HomePage</h1>
            <div>
                <button onClick={()=>navigate("/profile")}>
                    Go Profile
                </button>
            </div>
            
        </div>
    );
}

export default HomePage;
