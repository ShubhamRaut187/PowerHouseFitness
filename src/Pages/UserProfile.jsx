import React from 'react';
import { useDispatch } from 'react-redux';
import { handleLogout } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

function UserProfile(props) {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    // console.log(handleLogout);
    return (
        <div>
            <button onClick={()=>{
                dispatch(handleLogout(null));
                navigate('/signuplogin')
            }}>Logout</button>
        </div>
    );
}

export default UserProfile;