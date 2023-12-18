let InitialLog = {
    status:'out',
    LoginRouteConfig:{
        path:'/signuplogin',
        name:'Login',
    },
    user:{}    
}

const loginReducer = (store=InitialLog,action)=>{
    switch (action.type) {
        case 'Login':{
            return{
                status:'in',
                LoginRouteConfig:{
                    path:'/cart',
                    name:'My Cart'
                },
                user:action.payload
            }
        }
        case 'Logout':{
            return{
                status:'out',
                LoginRouteConfig:{
                    path:'/signuplogin',
                    name:'Login'
                },
                user:action.payload
            }
        }
        default:{
            return store
        }  
    }
}

export {loginReducer}