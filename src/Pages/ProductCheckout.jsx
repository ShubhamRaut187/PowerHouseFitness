import React,{useState} from 'react';
import './PageStyles/ProductCheckout.css'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { handleEmptyCart } from '../Redux/action';
import { authenication } from '../firebase-config';
import { RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";

function ProductCheckout(props) {
    let [CardNumber,SetCardNumber] = useState('');
    let [CardHolder,SetCardHolder] = useState('');
    let [Cvv,SetCvv] = useState(0);
    let [Expdate,SetExpdate] = useState('');
    let [Otp,SetOtp] = useState(0);
    // let [GrandTotal,SetGrandTotal] = useState(0);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let Phone = useSelector((store)=>{
        return store.loginReducer.user.User.Mobile
    })
    let CID = useSelector((store)=>{
        return store.loginReducer.user.User._id
    })
    let Token = useSelector((store)=>{
        return store.loginReducer.user.Token
    })
    // let Membership = useSelector((store)=>{
    //     return store.clubReducer
    // })
    let CartTotal = useSelector((store)=>{
        return store.cartReducer.CartTotal;
    })
    let CartProducts = useSelector((store)=>{
        return store.cartReducer.CartProducts;
    })

    let PostOrder=()=>{
        fetch(`https://powerhousefitnessserver.onrender.com/orders/create`,{
                method:'POST',
                headers:{
                    'authorization':`Bearer ${Token}`,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    CustomerID:CID,
                    OrderBill:CartTotal,
                    OrderStatus:'Placed',
                    Details:CartProducts
                })
            }).then((response)=>{
                return response.json();
            }).then((response)=>{
                alert(response.Message);
                dispatch(handleEmptyCart());
                navigate('/')
            }).catch((error)=>{
                alert('Something Went Wrong');
                console.log(error);
            })
    }

    let generateRecaptcha = ()=>{
        window.recaptchaVerifier = new RecaptchaVerifier(authenication,'precaptcha_div', {
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
               PostOrder();
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



    return (
        <div className='pcheckout_main'>
            <div className='pcard_details'>
                <h2>Enter Your Card Details</h2>
                <h3>£{CartTotal}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad atque rem unde officiis totam, eaque neque consectetur placeat quod ducimus debitis ullam inventore, soluta doloribus iure eum dolores. Velit, neque!</p>
                <form className='pcard_detais_form' onSubmit={requestotp}>
                    <input type="text" placeholder='Enter your card number' className='pcard_details_input1'onChange={(event)=>{
                        SetCardNumber(event.target.value)
                    }}/>
                    <input type="text" placeholder='Name on card' className='pcard_details_input1'onChange={(event)=>{
                        SetCardHolder(event.target.value)
                    }}/>
                    <div>
                        <input type="password" placeholder='CVV' className='pcard_details_input2' onChange={(event)=>{
                        SetCvv(event.target.value)
                    }}/>
                        <input type="date" placeholder='Expiry date' className='pcard_details_input2'onChange={(event)=>{
                        SetExpdate(event.target.value)
                    }}/>
                    </div>
                    <input type="submit" value='Pay' className='pcard_details_submit_btn'/>
                </form>
            </div>
            <div className='potp_div'>
                <h2>Enter Your OTP</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repudiandae tempore nihil doloremque ratione excepturi. Deserunt totam pariatur molestias consequatur, adipisci quos et nihil excepturi labore mollitia nemo aperiam autem?</p>
                <form className='potp_form' onSubmit={verifyotp}>
                    <input type="password" className='potp_input'placeholder='Enter OTP'onChange={(event)=>{
                        SetOtp(event.target.value);
                    }}/>
                    <input type="submit" value='Verify OTP' className='potp_verify_btn'/>
                </form>
                <div id='precaptcha_div'></div>
            </div>
        </div>
    );
}

export default ProductCheckout;