import React from 'react';
import './ComponentStyles/ProductFilterandSort.css'
function ProductFilterandSort(props) {
    return (
        <div className='productfilter_main'>
           <div className='product_filter_div'>
                <p>Search by category: </p>
                <select>
                    <option value="">Category</option>
                    <option value="Tredmills">Tredmills</option>
                    <option value="Cycles">Cycles</option>
                    <option value="Protein">Protein Shake</option>
                    <option value="Dumbles">Dumbles</option>
                    <option value="Accessories">Accessories</option>
                </select>
           </div>
           <div className='productsort_div'>
                <p>Sort by price: </p>
                <select>
                    <option value="">Sort Options</option>
                    <option value="HightoLow">High to Low</option>
                    <option value="LowtoHigh">LowtoHigh</option>
                </select>
           </div>
        </div>
    );
}

export default ProductFilterandSort;