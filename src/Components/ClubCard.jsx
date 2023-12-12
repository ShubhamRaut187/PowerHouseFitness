import React from 'react';
import './ComponentStyles/ClubCard.css'

function ClubCard(props) {
    return (
        <div className='clubcard_main'>
            <div className='clubcard_img_div'>
                <img src="https://png.pngtree.com/background/20230516/original/pngtree-an-empty-gym-with-all-of-the-machines-picture-image_2611112.jpg" alt="" />
            </div>
            <div className='clubcard_info_div'>
                <p className='clubcard_name'>Power House Ultra, Kothrud</p>
                <p className='clubcard_area'>Kothrud,Pune</p>
                <p className='clubcard_contact'>7499265181</p>
                <p className='clubcard_email'>shubhamraut@gmail.com</p>
                <button className='clubcard_details_btn'>Club details</button>
            </div>
        </div>
    );
}

export default ClubCard;