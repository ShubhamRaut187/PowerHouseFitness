import React from 'react';
import './PageStyles/ClubsDescription.css'
import PageTitle from '../Components/PageTitle'
import ClubDescriptionCard from '../Components/ClubDescriptionCard';


function ClubsDescription(props) {
    return (
        <div className='clubdescription_main'>
           <PageTitle Title={'Our Club'}/>
           <ClubDescriptionCard/>
        </div>
    );
}

export default ClubsDescription;