import {legacy_createStore as createstore,combineReducers} from 'redux';
import {persistReducer,persistStore} from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'


const persistConfig = {
    key:'root',
    version:1,
    storage:storageSession
}

const rootreducer = combineReducers({});

const persistedReducer = persistReducer(persistConfig,rootreducer);

export let store = createstore(persistedReducer);
export let persistor = persistStore(store);
store.subscribe(()=>{
    console.log(store.getState());
})