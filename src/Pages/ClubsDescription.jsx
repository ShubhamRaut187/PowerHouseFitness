import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './PageStyles/ClubsDescription.css'
import PageTitle from '../Components/PageTitle'
import ClubDescriptionCard from '../Components/ClubDescriptionCard';
import MembershipPlans from '../Components/MembershipPlans';
import PageHeadings from '../Components/PageHeadings';
import Trainers from '../Components/Trainers';

function ClubsDescription(props) {
    let [Club,SetClub] = useState({});
    let {id} = useParams();
    let Token = useSelector((store)=>{
        return store.loginReducer.user.Token
    })

    useEffect(()=>{
        fetch(`http://localhost:8000/clubs/${id}`,{
            headers:{
                'authorization':`Bearer ${Token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response);
            SetClub(response.Club);
        }).catch((error)=>{
            console.log(error);
        })

    },[id,Token])


    return (
        <div className='clubdescription_main'>
           <PageTitle Title={'Our Club'}/>
           <ClubDescriptionCard Club={Club}/>
           <PageHeadings Heading={'Browse Our Membership Plans'}/>
           <MembershipPlans/>
           <PageHeadings Heading={'Personal Trainers At Our Club'}/>
           <Trainers Trainers={Club.Trainers}/>
        </div>
    );
}

export default ClubsDescription;