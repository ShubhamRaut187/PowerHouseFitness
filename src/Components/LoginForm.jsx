import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { handleLogin } from '../Redux/action';
import './ComponentStyles/LoginForm.css'


function LoginForm({Setpgname}) {
    let [Email,SetEmail] = useState('');
    let [Password,SetPassword] = useState('');
    let Navigate = useNavigate();
    let dispatch = useDispatch();

    let AuthUser = (event) =>{
        event.preventDefault();
        fetch(`http://localhost:8000/auth/login`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Email,
                Password
            })
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            if(response.Message === 'Login Successful'){
                dispatch(handleLogin(response));
                alert(response.Message);
                Navigate('/');
            }
            else{
                alert(response.Message);
            }
        }).catch((error)=>{
            console.log(error);
        })
    }



    return (
        <div className='loginform_main'>
            <div className='loginmsg_div'>
                <h3>Dear Valued Member</h3>
                <h1>Welcome Back...!</h1>
                <p>We are delighted to welcome you back at Power House Fitness! Your presence means world to us, and we cant wait to make your experience as fabulous as ever. </p>
            </div>
            <div className='loginform_div'>
                <h2>Login To Your Account</h2>
                <p>Please login to your account to explore our clubs, view and purchase our new products. We are here to make your fitness journey beautiful and exciting.</p>
                <form onSubmit={AuthUser}>
                    <input type="email" placeholder='Enter Username/Email' className='loginform_input' onChange={(event)=>{
                        SetEmail(event.target.value);
                    }}/>
                    <input type="password" placeholder='Enter Password' className='loginform_input' onChange={(event)=>{
                        SetPassword(event.target.value);
                    }}/>
                    <input type="submit" value='Login' className='loginform_login_btn'/>
                </form>  
                <p onClick={()=>{
                    Setpgname({
                        Text:'Create Your Account',
                        Comp:false
                    })
                }}>Don't have a account, create one! </p>  
            </div>
        </div>
    );
}

export default LoginForm;