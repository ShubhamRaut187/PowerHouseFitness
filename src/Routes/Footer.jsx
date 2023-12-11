import React from 'react';
import './Styles/Footer.css'
function Footer(props) {
    return (
        <div className='footer_main'>
            <div className='footer_About_us'>
                <h2 className='footer_headings'>About Us</h2>
                <p>Founded in the vibrant city of Pune, India, in the year 2022, Power House Fitness has emerged as a dynamic and influential fitness brand dedicated to transforming lives. Since its inception, Power House Fitness has rapidly expanded its footprint, establishing thriving fitness clubs not only in Pune but also in key metropolitan cities such as Mumbai, Bangalore, and Kolkata. Committed to providing state-of-the-art facilities, cutting-edge equipment, and a supportive community environment, Power House Fitness has become synonymous with excellence in the fitness industry. Our journey is rooted in the belief that fitness is not merely a destination but a holistic lifestyle, and we take pride in empowering individuals across diverse locations to embark on their unique fitness journeys. As we continue to grow, our mission remains unwavering — to inspire, motivate, and foster a culture of wellness that transcends geographical boundaries. Power House Fitness is not just a brand; it's a movement that propels individuals towards a healthier and stronger tomorrow.</p>
            </div>
            <div className='footer_Quote'>
                <h2 className='footer_headings'>Why is it important to stay fit</h2>
                <p>In today's fast-paced and demanding world, prioritizing fitness has become more crucial than ever. Regular physical activity is not just a means to achieve an aesthetically pleasing physique; it is a cornerstone of overall well-being. Engaging in fitness routines not only strengthens our muscles and enhances cardiovascular health but also plays a pivotal role in managing stress, improving mental clarity, and boosting immunity. In a world dominated by sedentary lifestyles and technological advancements, maintaining an active and healthy routine is a proactive measure against the adverse effects of modern living. Fitness empowers individuals, promoting resilience, confidence, and a positive mindset, ultimately contributing to a higher quality of life. By investing in our physical health, we lay the foundation for a more energetic, focused, and balanced lifestyle that extends beyond the gym, positively impacting every aspect of our daily endeavors.</p>
            </div>
            <div className='footer_stay_connected'>
                <h2 className='footer_headings'>Stay Connected</h2>
                <p>Connect with us on social media to stay updated on the latest fitness trends, exclusive offers, and community highlights. Join our vibrant online community and let's inspire each other to reach new heights of wellness!</p>
            </div>
            
        </div>
    );
}

export default Footer;