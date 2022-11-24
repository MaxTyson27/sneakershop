import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import './sass/styles/Reset.sass';
import './sass/styles/Global.sass';
import store from './redux/redux-store'
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';


const App = (props) => {
  return (
    <div className="App">
      <HeaderContainer/>
      <Routes>
        <Route path='/' element={<MainContainer/>}/>
      </Routes>
    </div>
  );
}

const AppContainer = connect(null, null)(App)

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
