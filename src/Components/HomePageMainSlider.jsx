import React from 'react';
import Slider from 'react-slick'

// CSS
import './ComponentStyles/HomePageMainSlider.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function HomePageMainSlider(props) {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // dotsClass:'button_bar'
      };
    return (
        <div className='HomePageSlider_main'>
            <Slider {...settings} className='home_slider'>
               <div className='home_slider_card'>
                    <div className='home_slider_card_img_div'>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ac8765105077959.5fb685bdd629e.jpg" alt="1" />
                    </div>
                    <div className='home_slider_card_info'>
                        <h2>Specialized Training Programs</h2>
                    </div>
               </div>
               <div className='home_slider_card'>
                    <div className='home_slider_card_img_div'>
                        <img src="https://images.zapfitness.com.au/nhhhe54nv4nq/1d6uxuYZqtQUnWHqPXGRfa/9ecc42a896b2772ff0491d0bf65cd384/231045_ZAP_Banner_Image__1_.jpg?w=2000&h=1000&fl=progressive&q=90&fm=jpg&fit=fill&f=center" alt="1" />
                    </div>
                    <div className='home_slider_card_info'>
                        <h2>Nutritional Support and Cafeteria</h2>
                    </div>
               </div>
               <div className='home_slider_card'>
                    <div className='home_slider_card_img_div'>
                        <img src="https://png.pngtree.com/background/20230614/original/pngtree-people-exercising-inside-of-a-gym-picture-image_3488212.jpg" alt="1" />
                    </div>
                    <div className='home_slider_card_info'>
                        <h2>State-of-the-Art Equipment</h2>
                    </div>
               </div>
               <div className='home_slider_card'>
                    <div className='home_slider_card_img_div'>
                        <img src="https://img.freepik.com/free-photo/full-shot-smiley-man-training-with-dumbbells_23-2149734707.jpg" alt="1" />
                    </div>
                    <div className='home_slider_card_info'>
                        <h2>Best Trainers</h2>
                    </div>
               </div>
               
            </Slider>
        </div>
    );
}

export default HomePageMainSlider;