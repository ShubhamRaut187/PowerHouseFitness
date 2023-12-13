import React from 'react';

import './ComponentStyles/LoginForm.css'
function LoginForm({Setpgname}) {
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
                <form>
                    <input type="email" placeholder='Enter Username/Email' className='loginform_input'/>
                    <input type="password" placeholder='Enter Password' className='loginform_input'/>
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