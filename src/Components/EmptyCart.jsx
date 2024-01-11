import React from 'react';
import './ComponentStyles/EmptyCart.css'
function EmptyCart(props) {
    return (
        <div className='emptycart_main'>
            <h1>Oops! Your cart is empty. Please add some items!</h1>
        </div>
    );
}

export default EmptyCart;