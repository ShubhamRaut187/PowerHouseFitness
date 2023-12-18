import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComponentStyles/ClubCard.css'

function ClubCard({Name,Area,City,Images,id}) {
  let navigate = useNavigate();
  
  return (
        <div className='clubcard_main'>
            <div className='clubcard_img_div'>
                <img src={Images[0]} alt={Name} />
            </div>
            <div className='clubcard_info_div'>
                <p className='clubcard_name'>{Name}</p>
                <p className='clubcard_area'>{Area},&nbsp;{City}</p>
                <p className='clubcard_contact'>020-123456789</p>
                <p className='clubcard_email'>shubhamraut@gmail.com</p>
                <button className='clubcard_details_btn' onClick={()=>{
                    navigate(`/clubsdescription/${id}`)
                }}>Club details</button>
            </div>
        </div>
    );
}

export default ClubCard;