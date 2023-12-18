import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import './PageStyles/Checkout.css'
import { authenication } from '../firebase-config';
import { RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";

function Checkout(props) {
    let [CardNumber,SetCardNumber] = useState('');
    let [CardHolder,SetCardHolder] = useState('');
    let [Cvv,SetCvv] = useState(0);
    let [Expdate,SetExpdate] = useState('');
    let [Otp,SetOtp] = useState(0);
    let [GrandTotal,SetGrandTotal] = useState(0);

    let Phone = useSelector((store)=>{
        return store.loginReducer.user.User.Mobile
    })

    let Membership = useSelector((store)=>{
        return store.clubReducer
    })





    let generateRecaptcha = ()=>{
        window.recaptchaVerifier = new RecaptchaVerifier(authenication,'recaptcha_div', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              
            }
          },authenication);
    }

    let requestotp = (event)=>{
        event.preventDefault();
        if(CardNumber.length === 12 && CardHolder !== "" && Cvv.length === 3){
            generateRecaptcha();
            let appVerifier = window.recaptchaVerifier;
            let Mobile = `+91${Phone}`
            signInWithPhoneNumber(authenication,Mobile,appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult
            }).catch((error)=>{console.log(error);})
        }
    }
    
    let verifyotp = (event)=>{
        event.preventDefault();
        if(Otp.length === 6){
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(Otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
            //    PostOrder();
                // ...
              }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
                alert('Something Went Wrong');
              });
        }
        else{

        }
    }
    
    useEffect(()=>{
        let keys = Object.keys(Membership.Trainer)
        if(keys.length === 0){
            SetGrandTotal(Membership.Plan.Fees);
        }
        else{
            let Total = Membership.Plan.Fees + Membership.Trainer.Fees
            SetGrandTotal(Total)
        }
    },[Membership.Plan.Fees,Membership.Trainer.Fees,Membership.Trainer])
    
    
    return (
        <div className='checkout_main'>
            <div className='card_details'>
                <h2>Enter Your Card Details</h2>
                <h3>£{GrandTotal}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad atque rem unde officiis totam, eaque neque consectetur placeat quod ducimus debitis ullam inventore, soluta doloribus iure eum dolores. Velit, neque!</p>
                <form className='card_detais_form' onSubmit={requestotp}>
                    <input type="text" placeholder='Enter your card number' className='card_details_input1'onChange={(event)=>{
                        SetCardNumber(event.target.value)
                    }}/>
                    <input type="text" placeholder='Name on card' className='card_details_input1'onChange={(event)=>{
                        SetCardHolder(event.target.value)
                    }}/>
                    <div>
                        <input type="password" placeholder='CVV' className='card_details_input2' onChange={(event)=>{
                        SetCvv(event.target.value)
                    }}/>
                        <input type="date" placeholder='Expiry date' className='card_details_input2'onChange={(event)=>{
                        SetExpdate(event.target.value)
                    }}/>
                    </div>
                    <input type="submit" value='Pay' className='card_details_submit_btn'/>
                </form>
            </div>
            <div className='otp_div'>
                <h2>Enter Your OTP</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repudiandae tempore nihil doloremque ratione excepturi. Deserunt totam pariatur molestias consequatur, adipisci quos et nihil excepturi labore mollitia nemo aperiam autem?</p>
                <form className='otp_form' onSubmit={verifyotp}>
                    <input type="password" className='otp_input'placeholder='Enter OTP'onChange={(event)=>{
                        SetOtp(event.target.value);
                    }}/>
                    <input type="submit" value='Verify OTP' className='otp_verify_btn'/>
                </form>
                <div id='recaptcha_div'></div>
            </div>
        </div>
    );
}

export default Checkout;