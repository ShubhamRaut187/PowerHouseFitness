import React,{useState} from 'react';
import PageTitle from '../Components/PageTitle';
import { handleIncreaseQuantity,handleReduceQuantity,handleRemoveProduct,handleEmptyCart } from '../Redux/action';
import { useSelector,useDispatch } from 'react-redux';
import CartProductCard from '../Components/CartProductCard'
import { useNavigate } from 'react-router-dom';

// React-Slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './PageStyles/Cart.css'

function Cart(props) {
    let [Payment,SetPayment] = useState('');
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let CartProducts = useSelector((store)=>{
        return store.cartReducer.CartProducts;
    })
    let CartTotal = useSelector((store)=>{
        return store.cartReducer.CartTotal;
    })
    let token = useSelector((store)=>{
        return store.loginReducer.user.Token;
    })
    let CustomerID = useSelector((store)=>{
        return store.loginReducer.user.User._id;
    })
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // nextArrow:<SlickNextArrow/>,
        // prevArrow:<SlickPreviousArrow/>,
        vertical: true,
        verticalSwiping: true,
        
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };

      let Proceed=()=>{
        if(Payment==='cash'){
            fetch(`https://powerhousefitnessserver.onrender.com/orders/create`,{
                method:'POST',
                headers:{
                    'authorization':`Bearer ${token}`,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    CustomerID,
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
        else{
            navigate('/productcheckout')
        }
    }


    return (
        <div>
            <PageTitle Title={'Your Cart'}/>
            <div className='cart_main'>
                <div className='cart_products_div' >
                    <Slider {...settings} className='car_slider_comp'>
                        {
                            CartProducts.map((elem,index)=>{
                                return <CartProductCard key={elem._id} elem={elem} index={index} CartProducts={CartProducts} dispatch={dispatch} handleIncreaseQuantity={handleIncreaseQuantity} handleReduceQuantity={handleReduceQuantity} handleRemoveProduct={handleRemoveProduct}/>
                            })
                        }
                    </Slider>
                </div>
                <div className='cart_details_div'>
                    <div className='cd_info_one'>
                        <h1>Cart Summary</h1>
                        <p>Review Your Cart and Begin Your Fitness Journey Now!</p>
                    </div>
                    <div className='cd_info_two'>
                        <p>Cart Subtotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...£{CartTotal}</p>
                        <p>Shipping Charges&nbsp;&nbsp;...£100</p>
                        <p>Grand Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...£{CartTotal+100}</p>
                    </div>
                    {/* <button className='cd_clear_cart_btn'>Clear your cart</button> */}
                    <div className='cd_info_three'>
                        <h3>Select Your Payment Method</h3>
                        <div className='cd_mode_btn_div'>
                            <button onClick={()=>{
                                SetPayment('cash')
                            }}>Cash</button>
                            <button onClick={()=>{
                                SetPayment('online')
                            }}>Online</button>
                        </div>
                    </div>
                    <div className='cd_info_four'>
                        <button onClick={Proceed}>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;