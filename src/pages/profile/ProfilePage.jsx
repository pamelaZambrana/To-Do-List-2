import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {
    const location = useLocation();
    console.log("we are in:", location.pathname);
    const navigate=useNavigate();
    return (
        <div>
            <h1>Your profile</h1>
            <div>
                <button onClick={()=>navigate(-1)}>
                    Go Back
                </button>
                <button onClick={()=>navigate("/tasks")}>
                    Tasks
                </button>
            </div>
        </div>
    );
}

export default ProfilePage;
