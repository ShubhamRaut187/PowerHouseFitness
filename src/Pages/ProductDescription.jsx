import React from 'react';
import './PageStyles/ProductDescription.css'
import PageTitle from '../Components/PageTitle';
import ProductDescriptionCard from '../Components/ProductDescriptionCard';
function ProductDescription(props) {
    return (
        <div>
           <PageTitle Title={'Our Products'}/>
           <ProductDescriptionCard/>
        </div>
    );
}

export default ProductDescription;