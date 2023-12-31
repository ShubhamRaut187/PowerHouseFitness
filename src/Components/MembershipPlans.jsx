import React,{useState,useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleAddPlan } from '../Redux/action';

// React-Slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './ComponentStyles/MembershipPlans.css'
function MembershipPlans(props) {
    let dispatch = useDispatch()
    let [Plans,SetPlans] = useState([]);
    let Token = useSelector((store)=>{
      return store.loginReducer.user.Token;
    })
    useEffect(()=>{
      fetch(`https://powerhousefitnessserver.onrender.com/plans`,{
       headers:{
          'authorization':`Bearer ${Token}`
        }
      }).then((response)=>{
        return response.json();
      }).then((response)=>{
        SetPlans(response.Plans);
      }).catch((error)=>{
        console.log(error);
      })
    },[Token])



    // let elem = {
    //     Plan:'Silver Quarterly',
    //     Fees:5000
    // }
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
              {
                Plans.map((elem,index)=>{
                  return <div key={index}>
                  <div className='plan_card'>
                      <h2 className='plan_card_name'>{elem.Name}</h2>
                      <p className='plan_card_duration'>{elem.Validiti} Months</p>
                      <p className='plan_card_facilities'>{elem.Facilities}</p>
                      <p className='plan_card_fees'>₹{elem.Price}</p>
                      <button className='plan_card_select_btn' onClick={()=>{
                          dispatch(handleAddPlan(elem))
                      }}>Select Plan</button>
                  </div>
                  </div>
                })
              }
            {/* <div>
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
            </div> */}
            </Slider>
        </div>
    );
}

export default MembershipPlans;