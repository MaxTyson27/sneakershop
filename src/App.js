import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import './sass/styles/Reset.sass';
import './sass/styles/Global.sass';
import store from './redux/redux-store'
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import CartContainer from './components/Cart/CartContainer';
import FavouriteContainer from './components/Favourite/FavouriteContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
  return (
    <div className="App">
      <HeaderContainer/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/favourite' element={<FavouriteContainer/>} />
        <Route path='/profile' element={<ProfileContainer/>} />
      </Routes>
      {props.openCartMode && <CartContainer/>}
    </div>
  );
}


const mapStateToProps = (state) => ({
  openCartMode: state.cart.openCartMode
})

const AppContainer = connect(mapStateToProps, null)(App)

const SneakerApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SneakerApp;
