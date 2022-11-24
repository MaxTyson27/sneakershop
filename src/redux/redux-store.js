import {combineReducers, legacy_createStore as createStore} from 'redux';
import cartReducer from './cart-reducer';


const reducers = combineReducers({
  cart: cartReducer,
});


const store = createStore(reducers);

window.store = store;

export default store;