import React,{useState} from 'react';
import PageTitle from '../Components/PageTitle'
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';

function SignupLogin(props) {
    let [Pgname,Setpgname] = useState({
        Text:'Login Account',
        Comp:true
    });
    return (
        <div>
           <PageTitle Title={Pgname.Text}/>
            {
                Pgname.Comp?<LoginForm Setpgname={Setpgname}/>:<SignupForm Setpgname={Setpgname}/>
            }
        </div>
    );
}

export default SignupLogin;