import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { handleAddClub } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
import './ComponentStyles/ClubDescriptionCard.css'
import DescriptionSlider from './DescriptionSlider';
import Tags from './Tags';


function ClubDescriptionCard({Club}) {
    let dispatch = useDispatch();
    let Navigate = useNavigate();
    let Plan = useSelector((store)=>{
        return store.clubReducer.Plan
    })
    // let [Club,SetClub] = useState({});
    // let {id} = useParams();
    // let Token = useSelector((store)=>{
    //     return store.loginReducer.user.Token
    // })

    // useEffect(()=>{
    //     fetch(`http://localhost:8000/clubs/${id}`,{
    //         headers:{
    //             'authorization':`Bearer ${Token}`
    //         }
    //     }).then((response)=>{
    //         return response.json();
    //     }).then((response)=>{
    //         console.log(response);
    //         SetClub(response.Club);
    //     }).catch((error)=>{
    //         console.log(error);
    //     })

    // },[id,Token])


    let plancheck = () => {
        let keys = Object.keys(Plan);
        if(keys.length === 0){
            alert('Please Select a Membership Plan...!')
        }
        else{
            dispatch(handleAddClub(Club));
            Navigate('/clubcheckout')
        }
    }



    return (
        <div className='clubdescriptioncard_main'>
            <div className='clubdescriptioncard_img_div'>
                {
                    !Club.Images?<></>:<DescriptionSlider Images={Club.Images}/>
                }
            </div>
            <div className='clubdescriptioncard_info_div'>
                <h1 className='clubdescription_clubname'>{Club.Name}</h1>
                <p className='clubdescription_area'>{Club.Area}</p>
                <div className='clubdescription_tags'>
                   {
                    !Club.Tags?<></>:
                    Club.Tags.map((elem,index)=>{
                        return <Tags key={index} Text={elem}/>
                    })
                   }
                </div>
                <h2 className='clubdescription_city'>{Club.City}</h2>
                <p className='clubdescriptio_info'>{Club.Description}</p>
                <p className='clubdescription_membershiptag'>Membership starting from</p>
                <p className='clubdescription_starting_price'>₹{Club.BasePrice}</p>
                <button className='clubdescription_member_btn' onClick={plancheck}>Become a member</button>
            </div>
        </div>
    );
}

export default ClubDescriptionCard;