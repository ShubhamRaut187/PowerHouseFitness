import React from 'react';
import {Routes,Route} from 'react-router-dom';

// Protected Routes
import ProtectedRoutes from './ProtectedRoutes';

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
import ProductCheckout from '../Pages/ProductCheckout';

function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/franchise' element={<Franchise/>}/>
                <Route path='/clubs' element={<ProtectedRoutes><Clubs/></ProtectedRoutes>}/>
                <Route path='/clubsdescription/:id' element={<ProtectedRoutes><ClubsDescription/></ProtectedRoutes>}/>
                <Route path='/signuplogin' element={<SignupLogin/>}/>
                <Route path='/products' element={<ProtectedRoutes><Products/></ProtectedRoutes>}/>
                <Route path='/productdescription/:id' element={<ProtectedRoutes><ProductDescription/></ProtectedRoutes>}/>
                <Route path='/userprofile' element={<ProtectedRoutes><UserProfile/></ProtectedRoutes>}/>
                <Route path='/clubcheckout' element={<ProtectedRoutes><Checkout/></ProtectedRoutes>}/>
                <Route path='/cart' element={<ProtectedRoutes><Cart/></ProtectedRoutes>}/>
                <Route path='/productcheckout' element={<ProtectedRoutes><ProductCheckout/></ProtectedRoutes>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;