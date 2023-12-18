import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Styles/Navbar.css'

function Navbar(props) {
    let [active,SetActive] = useState("nav_menu")
    let [toggleIcon,Settoggleicon] = useState("nav_toggler")
    let Navigate = useNavigate();
    let navToggle = ()=>{
        active === "nav_menu" ? SetActive("nav_menu nav_active") : SetActive("nav_menu");
        toggleIcon === "nav_toggler" ? Settoggleicon("nav_toggler toggle") : Settoggleicon("nav_toggler");
    }
    let returnhome=()=>{
        Navigate('/')
    }
    let LoginRouteConfig = useSelector((store)=>{
        return store.loginReducer
    })
    // console.log(LoginRouteConfig.LoginRouteConfig.path);
    return (
        <div className='nav_main'>
           <div className='nav_decor1'>

           </div>
           <div className='nav'>
            <div>
                <h1 className='CompanyHead' onClick={returnhome}>Power House</h1>
            </div>
           <ul className={active}>
                <li className='nav_item'><Link to='/' className='nav_link'>Home</Link></li>
                <li className='nav_item'><Link to='/franchise' className='nav_link'>Franchise</Link></li>
                <li className='nav_item'><Link to='/clubs' className='nav_link'>Clubs</Link></li>
                <li className='nav_item'><Link to='/products' className='nav_link'>Products</Link></li>
                {
                    LoginRouteConfig.status === 'in' ? <li className='nav_item'><Link to='/userprofile' className='nav_link'>My Profile</Link></li> : null
                }
                <li className='nav_item'><Link to={LoginRouteConfig.LoginRouteConfig.path} className='nav_link'>{LoginRouteConfig.LoginRouteConfig.name}</Link></li>
                
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;