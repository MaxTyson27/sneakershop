import React from 'react';
import cl from '../Header.module.sass'
import cartImage from '../../../images/icons/cart.svg'
import { disableBodyScroll } from 'body-scroll-lock';

const HeaderCart = ({setCartMode, sum}) => {

 
  const onCartClick = () => {
    setCartMode()
    disableBodyScroll(document)
  }

  return (
    <div className={cl.cart}>
        <div className={cl.cart_box} onClick={onCartClick}>
          <img src={cartImage} alt="cart icon link"/>
          <p className={cl.cart_sum}>{sum} руб.</p>
        </div>
    </div>
  );
}

export default HeaderCart;
