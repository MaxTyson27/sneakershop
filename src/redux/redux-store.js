import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import cartReducer from './cart-reducer';
import productReducer from './product-reducer';
import thunkMiddleware from 'redux-thunk';
import favouriteReducer from './favourite-reducer';

const reducers = combineReducers({
  cart: cartReducer,
  product: productReducer,
  favourite: favouriteReducer,
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;