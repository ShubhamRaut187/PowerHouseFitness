import React from 'react';
import './ComponentStyles/ProductCard.css'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {handleAddProduct} from '../Redux/action'

function ProductCard({product,token}) {
    let {Name,Category,Brand,MRP,Price,Images,_id} = product;
    let navigate = useNavigate();
    let dispatch = useDispatch();

    let CartProducts = useSelector((store)=>{
        return store.cartReducer.CartProducts;
    })

    let IdentifyDuplicateProduct=(Item,Products)=>{
        let Flag = false;
        for(let i=0;i<Products.length;i++){
            if(Products[i]._id === Item._id){
                Flag = true;
            }
        }
        if(Flag){
            return true;
        }
        else{
            return false;
        }
    }

    let AddtoCart = ()=>{
        fetch(`https://powerhousefitnessserver.onrender.com/products/${_id}`,{
            headers:{
                "authorization":`Bearer ${token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response);
            let Item = {
                ...response.Product,
                Quantity:1
            }
            let Flag = IdentifyDuplicateProduct(Item,CartProducts);
            if(!Flag){
                CartProducts.push(Item);
                dispatch(handleAddProduct(CartProducts))
                alert('Product added to cart.')
            }
            else{
                alert('Item already added to cart!');
            }
           
        }).catch((error)=>{
            console.log(error);
        })
    }
    
    return (
        <div className='product_card_main'>
            <div className='product_card_img_div'>
                <img src={Images[0]} alt={Name} />
            </div>
            <div className='product_card_info_div'>
                <p className='product_card_brand'>{Brand}</p>
                <p className='product_card_name' onClick={()=>{
                    navigate(`/productdescription/${_id}`)
                }}>{Name}</p>
                <p className='product_card_category'>{Category}</p>
                <p className='productcard_mrp'>₹{MRP}</p>
                <p className='productcard_price'>₹{Price}</p>
            </div>
            <button className='productcard_addtocart_btn' onClick={AddtoCart}>Add to cart</button>
        </div>
    );
}

export default ProductCard;