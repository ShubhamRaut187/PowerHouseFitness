import React from 'react';
import './ComponentStyles/ProductDescriptionCard.css'
import DescriptionSlider from './DescriptionSlider';
import Tags from './Tags';

function ProductDescriptionCard(props) {
    return (
        <div className='productdescriptioncard_main'>
        <div className='productdescriptioncard_img_div'>
            <DescriptionSlider/>
        </div>
        <div className='productdescriptioncard_info_div'>
            <h1 className='productdescription_productname'>Power House Ultra, Kothrud</h1>
            <p className='productdescription_area'>kothrud</p>
            <div className='productdescription_tags'>
                <Tags Text={'Best Location'}/>
                <Tags Text={'SPA'}/>
                <Tags Text={'PT'}/>
                <Tags Text={'Nutritionist'}/>
            </div>
            <h2 className='productdescription_city'>Pune</h2>
            <p className='productdescriptio_info'>MuscleBlaze Biozyme Performance Whey is crafted exclusively for fitness and muscle-building champions who want their protein supplement to be as effective as their efforts. It is scientifically designed with Enhanced Absorption Formula (EAF®) to maximize the bioavailability of protein for the Indian bodies. It’s a part of MB’s pioneering innovation- the BIOZYME series. The other fitness supplements in this iconic series are Biozyme Whey Iso-Zero & Biozyme Whey Protein.</p>
            <p className='productdescription_membershiptag'>Membership starting from</p>
            <p className='productdescription_starting_price'>₹4,000</p>
            <button className='productdescription_member_btn'>Become a member</button>
        </div>
    </div>
    );
}

export default ProductDescriptionCard;