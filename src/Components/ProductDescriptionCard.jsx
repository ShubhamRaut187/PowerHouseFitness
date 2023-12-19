import { useEffect,useState } from 'react';
import React from 'react';
import './ComponentStyles/ProductDescriptionCard.css'
import DescriptionSlider from './DescriptionSlider';
import Tags from './Tags';
import { handleAddProduct } from '../Redux/action';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function ProductDescriptionCard(props) {
    let [Item,SetItem] = useState({});
    let dispatch = useDispatch();
    let {id} = useParams();

    let CartProducts = useSelector((store)=>{
        return store.cartReducer.CartProducts;
    }) 
    
    let Token = useSelector((store)=>{
        return store.loginReducer.user.Token
    })
    
    let IdentifyDuplicate=()=>{
        let Flag = false;
        for(let i=0;i<CartProducts.length;i++){
          if(CartProducts[i].title === Item.title){
           Flag = true;
          }
        }
    
        if(Flag){
          alert("Item already added to cart!");
        }
        else{
          let FinalItem = {
            ...Item,
            Quantity:1
          }
          CartProducts.push(FinalItem);
          dispatch(handleAddProduct(CartProducts));
        }
    }

    useEffect(()=>{
        fetch(`https://powerhousefitnessserver.onrender.com/products/${id}`,{
            headers:{
                'authorization':`Bearer ${Token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
           SetItem(response.Product);
        }).catch((error)=>{
            console.log(error);
        });
    },[id,Token])

    
    return (
        <div className='productdescriptioncard_main'>
        <div className='productdescriptioncard_img_div'>
          {
            !Item.Images  ? <></> :   <DescriptionSlider Images={Item.Images}/>
          }
        </div>
        <div className='productdescriptioncard_info_div'>
            <h1 className='productdescription_productname'>{Item.Name}</h1>
            <p className='productdescription_area'>{Item.Category}</p>
            <div className='productdescription_tags'>
                {
                    !Item.Tags ? <></> : Item.Tags.map((elem,index)=>{
                        return <Tags Text={elem} key={index}/>
                    })
                }
            </div>
            <h2 className='productdescription_city'>{Item.Brand}</h2>
            <p className='productdescriptio_info'>{Item.Description}</p>
            <p className='productdescription_membershiptag'>Was&nbsp;&nbsp;₹{Item.MRP}</p>
            <p className='productdescription_starting_price'>Now&nbsp;&nbsp;₹{Item.Price}</p>
            <button className='productdescription_member_btn' onClick={IdentifyDuplicate}> Add to cart</button>
        </div>
    </div>
    );
}

export default ProductDescriptionCard;