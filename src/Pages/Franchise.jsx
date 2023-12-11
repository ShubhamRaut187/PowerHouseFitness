import React from 'react';
import PageTitle from '../Components/PageTitle';
import GeneralText from '../Components/GeneralText';
import CityCards from '../Components/CityCards';
import PageHeadings from '../Components/PageHeadings';
import FranchiseForm from '../Components/FranchiseForm';
function Franchise(props) {
    let FranchiseCities = [
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
        },
        {
            Name:'Delhi',
            Image:'https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_640.jpg'
        },
        {
            Name:'Hyderabad',
            Image:'https://wallpapercave.com/wp/wp10257499.jpg'
        },
        {
            Name:'Ahemdabad',
            Image:'https://media.istockphoto.com/id/1424699305/photo/atal-bridge-at-the-sabarmati-riverfront-in-ahmedabad.webp?b=1&s=170667a&w=0&k=20&c=uX-7OznM0yBWbJi6LFJedSCVXcSIrScV2nIBKU7-VUM='
        }
    ]
    return (
        <div>
           <PageTitle Title={'Franchise Opportunity'}/>
           <GeneralText Text={'Embark on an exhilarating journey with Power House Fitness by exploring our franchise opportunities! We are thrilled to offer you the chance to join a rapidly growing fitness revolution that began in Pune, India, in 2022 and has since conquered Mumbai, Bangalore, Kolkata, and beyond.'}/>
           <PageHeadings Heading={'Franchise opportunities open for...'}/>
           <CityCards Cities={FranchiseCities}/>
           <PageHeadings Heading={'Why power house fitness...?'}/>
           <GeneralText Text={'Benefit from a proven business model that has transformed lives and communities across the country.Tap into our extensive experience in the fitness industry, gaining access to cutting-edge equipment, innovative programs, and unparalleled support.Ride the wave of our success as we continue to expand our footprint in key markets, providing you with a vast and eager customer base.Join a brand that believes in fostering a community of wellness, strength, and empowerment, both within our clubs and throughout our franchise network.Ready to lead the fitness revolution in your city? Take the first step towards becoming a Power House Fitness franchise partner and redefine the future of fitness with us! Lets build healthier and stronger communities together.'}/>
           <FranchiseForm/>
        </div>
    );
}

export default Franchise;