let InitialCart={
    CartProducts:[],
    CartTotal:0,
}

const cartReducer = (store = InitialCart,action) => {
    switch (action.type) {
        case "AddProduct":{
            return{
                CartProducts:action.payload,
                CartTotal:action.CartTotal,
            }
        }
        case "RemoveProduct":{
            return{
                CartProducts:action.payload,
                CartTotal:action.CartTotal
            }
        }
        case "IncreaseQuantity":{
            return{
                CartProducts:action.payload,
                CartTotal:action.CartTotal
            }
        }
        case "ReduceQuantity":{
            return{
                CartProducts:action.payload,
                CartTotal:action.CartTotal
            }
        }
        case "EmptyCart":{
            return InitialCart
        }
        default:{
            return InitialCart;
        }
    }
}

export {cartReducer}