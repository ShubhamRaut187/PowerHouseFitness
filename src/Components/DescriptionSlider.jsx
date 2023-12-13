import React from 'react';
import './ComponentStyles/DescriptionSlider.css'

// React-Slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function DescriptionSlider(props) {
    let Images = [
        'https://img3.hkrtcdn.com/27426/prd_2742542-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg',
        'https://img1.hkrtcdn.com/27426/prd_2742540-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg',
        'https://img10.hkrtcdn.com/15961/prd_1596049-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg',
        'https://img3.hkrtcdn.com/27426/prd_2742552-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg'
    ]
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='description_slider_main'>
            <Slider {...settings}>
                {
                    Images.map((elem,index)=>{
                       return <div className='description_img_card'>
                            <img src={elem} alt={index} />
                        </div>
                    })
                }
            </Slider>
        </div>
    );
}

export default DescriptionSlider;