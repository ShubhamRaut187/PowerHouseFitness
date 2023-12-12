import React from 'react';
import './PageStyles/Products.css'
import PageTitle from '../Components/PageTitle';
import ProductFilterandSort from '../Components/ProductFilterandSort';
import ProductCard from '../Components/ProductCard';
function Products(props) {
    return (
        <div>
           <PageTitle Title={'Our Products'}/>
           <ProductFilterandSort/>
           <div className='productcards_parent_container'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
           </div>
        </div>
    );
}

export default Products;