import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const NotFoundPage = () => {
    const location = useLocation();
    console.log("we are in:", location.pathname);
    const navigate=useNavigate();
    return (
        <div>
            <h1>404-Page Not Found</h1>
            <div>
                <button onClick={()=>navigate("/")}>
                    Go Home
                </button>
            </div>
        </div>
    );
}

export default NotFoundPage;
