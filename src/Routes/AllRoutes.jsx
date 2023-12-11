import React from 'react';
import {Routes,Route} from 'react-router-dom';


// Pages
import Home from '../Pages/Home';
import Franchise from '../Pages/Franchise';
import Clubs from '../Pages/Clubs';
import ClubsDescription from '../Pages/ClubsDescription';
import SignupLogin from '../Pages/SignupLogin';
import Products from '../Pages/Products';
import ProductDescription from '../Pages/ProductDescription';
import UserProfile from '../Pages/UserProfile';
import Checkout from '../Pages/Checkout';
import Cart from '../Pages/Cart';


function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/franchise' element={<Franchise/>}/>
                <Route path='/clubs' element={<Clubs/>}/>
                <Route path='/clubsdescription' element={<ClubsDescription/>}/>
                <Route path='/signuplogin' element={<SignupLogin/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/' element={<ProductDescription/>}/>
                <Route path='/userprofile' element={<UserProfile/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;