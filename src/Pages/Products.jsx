import React,{useState,useEffect} from 'react';
import './PageStyles/Products.css'
import PageTitle from '../Components/PageTitle';
// import ProductFilterandSort from '../Components/ProductFilterandSort';
import ProductCard from '../Components/ProductCard';
import { useSelector } from 'react-redux';
import LoadingComp from '../Components/Loading';

function Products(props) {
    let [Products,SetProducts] = useState([]);
    let [Loading,SetLoading] = useState(true)
    let Token = useSelector((store)=>{
        return store.loginReducer.user.Token;
    })
    
    useEffect(()=>{
        fetch(`https://powerhousefitnessserver.onrender.com/products/`,{
            headers:{
                'authorization':`Bearer ${Token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            SetProducts(response.Products);
            SetLoading(false);
        }).catch((error)=>{
            console.log(error);
        })
    })
    return (
        <div>
           <PageTitle Title={'Our Products'}/>
           {/* <ProductFilterandSort/> */}
           {
            Loading ? <LoadingComp Text={'Loading Products'}/> : 
            <div className='productcards_parent_container'>
            {
                Products.map((elem,index)=>{
                    return <ProductCard key={elem._id} product={elem} token={Token}/>
                })
            }
            </div>
           }
        </div>
    );
}

export default Products;