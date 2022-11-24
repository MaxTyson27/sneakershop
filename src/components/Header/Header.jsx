import React from 'react';
import cl from './Header.module.sass'
import logo from '../../images/logo.png'
import favImg from '../../images/icons/heart.svg'
import userImage from '../../images/icons/user.svg'
import CartContainer from './Cart/CartContainer';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={cl.inner}>
      <div className="container">
        <div className={cl.row}>
          <div className={cl.logo_box}>
            <img src={logo} alt="logo icon"/>
            <div>
              <p className={cl.logo_title}>REACT SNEAKERS</p>
              <p className={cl.logo_text}>Магазин лучших кроссовок</p>
            </div>
          </div>
          <div className={cl.box}>
            <CartContainer/>
            <NavLink to='/favourites' className={cl.fav}>
              <img src={favImg} alt="cart icon link"/>
            </NavLink>
            <NavLink to='/profile' className={cl.profile}>
              <img src={userImage} alt="user icon link"/>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
