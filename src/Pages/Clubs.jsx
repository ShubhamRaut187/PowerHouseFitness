import React,{useState,useEffect} from 'react';
import PageTitle from '../Components/PageTitle'
import ClubFilter from '../Components/ClubFilter';
import {useSelector} from 'react-redux'
import './PageStyles/Clubs.css'
import ClubCard from '../Components/ClubCard';


function Clubs(props) {
    let [Clubs,SetClubs] = useState([]);
    let Token = useSelector((store)=>{
        return store.loginReducer.user.Token;
    })
    useEffect(()=>{
        fetch(`http://localhost:8000/clubs/`,{
            headers:{
                'authorization':`Bearer ${Token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            // console.log(response.Clubs[0]._id);
            SetClubs(response.Clubs)
        }).catch((error)=>{
            console.log(error);
        })
    },[Token])

    return (
        <div>
            <PageTitle Title={'Our Clubs'}/>
            <ClubFilter/>
            <div className='clubcard_parent_container'>
                {
                    Clubs.map((elem,index)=>{
                        return <ClubCard key={elem._id} Name={elem.Name} Area={elem.Area} City={elem.City} Images={elem.Images} id={elem._id}/>
                    })
                }
            </div>
        </div>
    );
}

export default Clubs;