import React from 'react';

import { useDispatch } from 'react-redux';
import { handleAddPlan } from '../Redux/action';

// React-Slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './ComponentStyles/MembershipPlans.css'
function MembershipPlans(props) {
    let dispatch = useDispatch()
    let elem = {
        Plan:'Silver Quarterly',
        Fees:5000
    }
    const settings = {
        className: "center",
        dots:true,
        // centerMode: true,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 0
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                infinite: true,
                slidesToScroll: 1,
                initialSlide: 0
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className='plans_main'>
            {/* <div className='plan_card'>
                <h2 className='plan_card_name'>Silver Quaterly</h2>
                <p className='plan_card_duration'>3 Months</p>
                <p className='plan_card_facilities'>Cardio, Hardcore, Zumba</p>
                <p className='plan_card_fees'>$4000</p>
                <button className='plan_card_select_btn'>Select Plan</button>
            </div> */}
            <Slider {...settings}>
            <div>
            <div className='plan_card'>
                <h2 className='plan_card_name'>Silver Quaterly</h2>
                <p className='plan_card_duration'>3 Months</p>
                <p className='plan_card_facilities'>Cardio, Hardcore, Zumba</p>
                <p className='plan_card_fees'>$4000</p>
                <button className='plan_card_select_btn' onClick={()=>{
                    dispatch(handleAddPlan(elem))
                }}>Select Plan</button>
            </div>
            </div>
            <div>
            <div className='plan_card'>
                <h2 className='plan_card_name'>Silver Quaterly</h2>
                <p className='plan_card_duration'>3 Months</p>
                <p className='plan_card_facilities'>Cardio, Hardcore, Zumba</p>
                <p className='plan_card_fees'>$4000</p>
                <button className='plan_card_select_btn'>Select Plan</button>
            </div>
            </div>
            <div>
            <div className='plan_card'>
                <h2 className='plan_card_name'>Silver Quaterly</h2>
                <p className='plan_card_duration'>3 Months</p>
                <p className='plan_card_facilities'>Cardio, Hardcore, Zumba</p>
                <p className='plan_card_fees'>$4000</p>
                <button className='plan_card_select_btn'>Select Plan</button>
            </div>
            </div>
            <div>
            <div className='plan_card'>
                <h2 className='plan_card_name'>Silver Quaterly</h2>
                <p className='plan_card_duration'>3 Months</p>
                <p className='plan_card_facilities'>Cardio, Hardcore, Zumba</p>
                <p className='plan_card_fees'>$4000</p>
                <button className='plan_card_select_btn'>Select Plan</button>
            </div>
            </div>
            </Slider>
        </div>
    );
}

export default MembershipPlans;