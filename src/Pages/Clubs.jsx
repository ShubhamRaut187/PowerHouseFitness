import React from 'react';
import PageTitle from '../Components/PageTitle'
import ClubFilter from '../Components/ClubFilter';
import './PageStyles/Clubs.css'
import ClubCard from '../Components/ClubCard';


function Clubs(props) {
    return (
        <div>
            <PageTitle Title={'Our Clubs'}/>
            <ClubFilter/>
            <div className='clubcard_parent_container'>
                <ClubCard/>
                <ClubCard/>
                <ClubCard/>
                <ClubCard/>
                <ClubCard/>
            </div>
        </div>
    );
}

export default Clubs;