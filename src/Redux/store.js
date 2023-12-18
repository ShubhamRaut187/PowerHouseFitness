import {legacy_createStore as createstore,combineReducers} from 'redux';
import {persistReducer,persistStore} from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import { loginReducer } from './loginReducer';
import { cartReducer } from './cartReducer';
import { clubReducer } from './clubReducer';

const persistConfig = {
    key:'root',
    version:1,
    storage:storageSession
}

const rootreducer = combineReducers({
    loginReducer,
    cartReducer,
    clubReducer
});

const persistedReducer = persistReducer(persistConfig,rootreducer);

export let store = createstore(persistedReducer);
export let persistor = persistStore(store);
store.subscribe(()=>{
    console.log(store.getState());
})