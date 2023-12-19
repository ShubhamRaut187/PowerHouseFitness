import React from 'react';
import { useSelector } from 'react-redux';
import './ComponentStyles/CartProductCard.css'
function CartProductCard({elem,index,handleIncreaseQuantity,handleReduceQuantity,handleRemoveProduct,dispatch}) {
    let CartProducts = useSelector((store)=>{
        return store.cartReducer.CartProducts;
    })
    let {Name,Category,Brand,Price,Images,Quantity} = CartProducts[index];
    return (
        <div>
        <div className='cart_product_card'>
        <div className='cp_img_div'>
            <img src={Images[0]} alt="nail" />
        </div>
        <div className='cp_info_div'>
            <div className='cp_basic_info_div'>
                <p className='cp_name'>{Name}</p>
                <p className='cp_category'>{Category}</p>
                <p className='cp_brand'>{Brand}</p>
                <p className='cp_price'>₹{Price}</p>
            </div>
            <div className='cp_op_dtn_div'>
                <div className='cp_qty_btn_div'>
                    <button onClick={()=>{
                        dispatch(handleReduceQuantity(elem,CartProducts))
                    }}>-</button>
                    <p>{Quantity}</p>
                    <button onClick={()=>{
                        dispatch(handleIncreaseQuantity(elem,CartProducts))
                    }}>+</button>
                </div>
                <button className='cp_remove_btn'onClick={()=>{
                    dispatch(handleRemoveProduct(index,CartProducts))
                }}>Remove</button>
            </div>
        </div>
                    
    </div>
    </div>
    );
}

export default CartProductCard;