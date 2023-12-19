import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { handleLogout } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
import './PageStyles/UserProfile.css'
import PageTitle from '../Components/PageTitle'

function UserProfile(props) {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let user = useSelector((store)=>{
        return store.loginReducer.user.User;
    })
    // console.log(handleLogout);
    return (
        <div>
            <PageTitle Title={'My Account'}/>
            <div className='user_profile_main'>
                <div className='user_img_div'>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a93c82108677535.5fc3684e78f67.gif" alt="" />
                </div>
                <div className='user_info_div'>
                    <h1 className='user_profile_name'>{user.Name}</h1>
                    <p className='user_profile_email'>{user.Email}</p>
                    <p className='user_profile_number'>{user.Mobile}</p>
                    <p className='user_profile_adress'>{user.Address
                    }</p>
                </div>
                <button className='logout_btn' onClick={()=>{
                    dispatch(handleLogout(null));
                    navigate('/signuplogin')
                    }}>Logout</button>
            </div>
        </div>
    );
}

export default UserProfile;

