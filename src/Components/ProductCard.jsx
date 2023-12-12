import React from 'react';
import './ComponentStyles/ProductCard.css'
function ProductCard(props) {
    return (
        <div className='product_card_main'>
            <div className='product_card_img_div'>
                <img src="https://img3.hkrtcdn.com/27426/prd_2742542-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg" alt="product" />
            </div>
            <div className='product_card_info_div'>
                <p className='product_card_brand'>MuscleBlaze</p>
                <p className='product_card_name'>MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate</p>
                <p className='product_card_category'>Protein</p>
                <p className='productcard_mrp'>₹5000</p>
                <p className='productcard_price'>₹4,299</p>
            </div>
            <button className='productcard_addtocart_btn'>Add to cart</button>
        </div>
    );
}

export default ProductCard;