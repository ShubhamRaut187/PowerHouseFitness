import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAddTrainer } from '../Redux/action';
// React-Slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './ComponentStyles/Trainers.css'
function Trainers({Trainers}) {
    let dispatch = useDispatch();
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
        <div className='trainers_main'>
            {/* <div className='trainer_card'>
                <div className='trainer_img_div'>
                    <img src="" alt="" />
                </div>
                <div className='trainer_info_div'>
                    <h2 className='trainer_card_name'>Shubham Raut</h2>
                    <p className='trainer_card_gender'>Male</p>
                    <p className='trainer_card_experties'>Abs,Cardio,Weight Training</p>
                    <p className='trainer_card_fees'>4000</p>
                    <button className='trainer_card_select_btn'>Select Trainer</button>
                </div>
            </div> */}
            <Slider {...settings} className='trainers_slider'>
            {
                !Trainers?<></>:Trainers.map((elem,index)=>{
                    return <div key={index}>
                    <div className='trainer_card'>
                        <div className='trainer_img_div'>
                            <img src={elem.Avatar} alt={elem.Name} />
                        </div>
                        <div className='trainer_info_div'>
                            <h2 className='trainer_card_name'>{elem.Name}</h2>
                            <p className='trainer_card_gender'>{elem.Gender}</p>
                            <p className='trainer_card_experties'>{elem.Experties}</p>
                            <p className='trainer_card_fees'>₹{elem.Fees}</p>
                            <button className='trainer_card_select_btn' onClick={()=>{
                                dispatch(handleAddTrainer(elem))
                            }}>Select Trainer</button>
                        </div>
                    </div> 
                    </div>
                })
            }
            </Slider>
        </div>
    );
}

export default Trainers;