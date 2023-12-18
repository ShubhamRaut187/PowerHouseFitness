import { Login,Logout,AddProduct,RemoveProduct,IncreaseQuantity,ReduceQuantity,HandelEmptyCart,AddClub,AddPlan,AddTrainer } from "./actionTypes";

let GetCartTotal=(Products)=>{
    let total = 0;
   if(Products.length === 1){
    return Products[0].Price * Products[0].Quantity;
   }
   else{
    for(let i=0;i<Products.length;i++){
        let ItemPrice = Products[i].Quantity * Products[i].Price
        total=total+ItemPrice;
     } 
   }
    console.log(total);
    return total;
}

const handleLogin = (val)=>{
    return{
        type:Login,
        payload:val
    }
}

const handleLogout = (val)=>{
    return{
        type:Logout,
        payload:val
    }
}

const handleAddProduct = (val)=>{
    let Total = GetCartTotal(val);
    console.log(Total);
    return{
        type:AddProduct,
        payload:val,
        CartTotal:Total
    }
}

const handleIncreaseQuantity = (Item,Products)=>{
   let UpdatedProducts = Products.map((elem,index)=>{
    if(elem._id === Item._id){
        if(elem.Quantity < 8){
            return {...elem,
                Quantity:elem.Quantity + 1} 
        }
    }
    return elem
   });
   let Total = GetCartTotal(UpdatedProducts);
   return{
    type:IncreaseQuantity,
    payload:UpdatedProducts,
    CartTotal:Total
   }

}


const handleReduceQuantity = (Item,Products)=>{
    Products.map((elem,index)=>{
        if(elem._id === Item._id){
           if(elem.Quantity > 1){
            elem.Quantity = elem.Quantity - 1;
           }
        }
        return true
       });
       let Total = GetCartTotal(Products);
       return{
        type:ReduceQuantity,
        payload:Products,
        CartTotal:Total
       }
}

const handleRemoveProduct = (Index,Products)=>{
    let UpdatedProducts =[...Products.slice(0,Index),...Products.slice(Index+1)]
    let Total = GetCartTotal(UpdatedProducts);
    return{
        type:RemoveProduct,
        payload:UpdatedProducts,
        CartTotal:Total
    }
}

const handleEmptyCart=()=>{
    return{
        type:HandelEmptyCart
    }
}



const handleAddClub =(val)=>{
    return{
        type:AddClub,
        payload:val,
    }
}

const handleAddPlan = (val)=>{
    return{
        type:AddPlan,
        payload:val
    }
}

const handleAddTrainer = (val) => {
    return{
        type:AddTrainer,
        payload:val
    }
}

export {handleLogin,handleLogout,handleAddProduct,handleIncreaseQuantity,handleReduceQuantity,handleRemoveProduct,handleEmptyCart,handleAddClub,handleAddTrainer,handleAddPlan}