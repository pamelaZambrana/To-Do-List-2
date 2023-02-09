import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const location = useLocation();
    console.log("we are in:", location.pathname);
    const navigate=useNavigate();
    

    return (
        <div>
            <h1>
                About | FAQs Page
            </h1>
            <div>
                <button onClick={()=>navigate("/")}>
                    Go Home
                </button>
                <button onClick={()=>navigate(-1)}>
                    Go Back
                </button>
                <button onClick={()=>navigate(1)}>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
