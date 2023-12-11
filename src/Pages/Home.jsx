import React from 'react';
import HomePageMainSlider from '../Components/HomePageMainSlider';
import PageHeadings from '../Components/PageHeadings';
import MessageInfo from '../Components/MessageInfo';
import CityCards from '../Components/CityCards';

function Home(props) {
    let Cities = [
        {
            Name:'Mumbai',
            Image:'https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_640.jpg'
        },
        {
            Name:'Pune',
            Image:'https://images.cnbctv18.com/wp-content/uploads/2018/08/pune.jpg'
        },
        {
            Name:'Banglore',
            Image:'https://t3.ftcdn.net/jpg/03/41/95/04/360_F_341950409_Gq1sN2OqYgRZrUTvPohSmgQVubaqzlA5.jpg'
        },
        {
            Name:'Kolkata',
            Image:'https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D'
        }
    ]

    return (
        <div>
          <HomePageMainSlider/>
          <MessageInfo Image={'https://static.vecteezy.com/system/resources/previews/022/653/988/original/treadmill-in-modern-gym-toned-image-3d-rendering-generative-ai-free-photo.jpg'} MessageTitle={'Welcome to power house...'} Message={'At Power House Fitness, we believe in the extraordinary potential within each of us. This is not just a fitness journey; its a commitment to unlocking your strongest, healthiest, and most empowered self.Here, we embrace the power of transformation – both physical and mental. Whether youre a seasoned fitness enthusiast or just starting your wellness adventure, our community is here to support you every step of the way. Explore our curated selection of cutting-edge fitness equipment, expertly designed training programs, and a wealth of resources to fuel your fitness aspirations. Join us as we redefine whats possible and celebrate the strength that resides within.Your journey to a powerhouse version of yourself starts now. Lets crush those goals together!'} BgColor={'#181f2a'} MsgColor={'white'} MsgTitleColor={'#7cff01'}/>
          <PageHeadings Heading='We are now in...'/>
          <CityCards Cities={Cities}/>
          <MessageInfo Image={'https://st5.depositphotos.com/70843308/65825/i/450/depositphotos_658252664-stock-photo-austrian-american-actor-businessman-filmmaker.jpg'} MessageTitle={'Our founders special message for you...'} Message={'I am thrilled to welcome you to Power House Fitness, a place where strength meets community, and determination transforms into achievement.At Power House Fitness, we believe in the transformative power of physical activity, fostering a supportive environment, and embracing a holistic approach to health. Our state-of-the-art facilities are equipped with cutting-edge equipment to cater to all fitness levels and goals. But Power House Fitness is more than just a collection of weights and machines; its a vibrant community of like-minded individuals striving for greatness. Our team of experienced trainers and staff are here to guide you, motivate you, and celebrate your victories, both big and small.As you navigate through our website, explore the array of fitness programs, classes, and resources we offer. From personalized training sessions to group workouts that foster camaraderie, we are committed to providing you with the tools you need to achieve your fitness aspirations.'} BgColor={'#181f2a'} MsgColor={'white'} MsgTitleColor={'#7cff01'}/>
        </div>
    );
}

export default Home;