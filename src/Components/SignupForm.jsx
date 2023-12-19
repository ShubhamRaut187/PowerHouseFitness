import React,{useState} from 'react';
import{useNavigate} from 'react-router-dom'

import './ComponentStyles/SignupForm.css'
function SignupForm({Setpgname}) {
    let [Name,SetName] = useState('');
    let [Email,SetEmail] = useState('');
    let [Password,SetPassword] = useState('');
    let [Mobile,SetMobile] = useState(0);
    let [Address,SetAddress] = useState('')
    let navigate = useNavigate();
    let registeruser = (event)=>{
        if(!Name || !Email || !Password || !Mobile || !Address){
            return alert('All fields are mandatory...!')
        }
        event.preventDefault();
        fetch(`https://powerhousefitnessserver.onrender.com/auth/signup`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Name,
                Password,
                Email,
                Mobile,
                Address,
                Role:'User'
            })
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            alert(response.Message);
            navigate('/')
        }).catch((error)=>{
            console.log(error);
            alert('Signup Failed')
        })
    }

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
                <form onSubmit={registeruser}>
                    <input type="text" placeholder='Enter Name' className='signupform_input' onChange={(event)=>{
                        SetName(event.target.value)
                    }}/>     
                    <input type="email" placeholder='Enter Username/Email' className='signupform_input'onChange={(event)=>{
                        SetEmail(event.target.value)
                    }}/>
                    <input type="number" placeholder='Enter Mobile Number' className='signupform_input'onChange={(event)=>{
                        SetMobile(event.target.value)
                    }}/>
                    <input type="password" placeholder='Enter New Password' className='signupform_input' onChange={(event)=>{
                        SetPassword(event.target.value)
                    }}/>
                    <input type="text" placeholder='Enter Address' className='signupform_input_address' onChange={(event)=>{
                        SetAddress(event.target.value)
                    }}/>
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