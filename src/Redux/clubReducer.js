let InitialClub = {
    Club:{},
    Plan:{},
    Trainer:{},
}

const clubReducer = (store = InitialClub,action) => {
    switch (action.type) {
        case 'AddClub':{
            return{
                ...store,
                Club:action.payload,
            }
        }
        case 'AddPlan':{
            return{
                ...store,
                Plan:action.payload
            }
        }    
        case 'AddTrainer':{
            return{
                ...store,
                Trainer:action.payload
            }
        }   
    
        default:{
            return store
        }
            
    }
}

export{clubReducer};