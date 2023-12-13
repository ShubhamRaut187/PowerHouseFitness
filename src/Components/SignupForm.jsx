import React from 'react';

import './ComponentStyles/SignupForm.css'
function SignupForm({Setpgname}) {
    return (
        <div className='signupform_main'>
            <div className='signupmsg_div'>
                <h3>Dear Valued Member</h3>
                <h1>Welcome To Power House Fitness...!</h1>
                <p>We are thrilled that you have choosen Power House Fitness to be your fitness partner. Join our growing community of empowered and confident individuals who know the value of fitness.</p>
            </div>
            <div className='signupform_div'>
                <h2>Create Your Account</h2>
                <p>Signup today and embark the journey of physical health, fitness and self confidence with us. Your health and fitness matters to us.</p>
                <form>
                    <input type="text" placeholder='Enter Name' className='signupform_input'/>     
                    <input type="email" placeholder='Enter Username/Email' className='signupform_input'/>
                    <input type="number" placeholder='Enter Mobile Number' className='signupform_input'/>
                    <input type="password" placeholder='Enter New Password' className='signupform_input'/>
                    <input type="text" placeholder='Enter Address' className='signupform_input_address'/>
                    <input type="submit" value='SignUp' className='signupform_signup_btn'/>
                </form>  
                <p onClick={()=>{
                    Setpgname({
                        Text:'Login Account',
                        Comp:true
                    })
                }}>Already have a account, Login!</p>  
            </div>
        </div>
    );
}

export default SignupForm;