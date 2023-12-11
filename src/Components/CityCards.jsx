import React from 'react';
import './ComponentStyles/CityCards.css'

// React-Slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function CityCards({Cities}) {
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
        <div className='CityCard_main'>
            <Slider {...settings}className='City_Card_slider'>
               {
                Cities.map((elem,index)=>{
                    return  <div className='city_card_main' key={index}>
                    <div className='citycard_city_img_div'>
                        <img src={elem.Image} alt={elem.Name} />
                    </div>
                    <div className='city_card_description_div'>
                        <h3>{elem.Name}</h3>
                    </div>
                </div>
                })
               }
               
            </Slider>
        </div>
    );
}

export default CityCards;