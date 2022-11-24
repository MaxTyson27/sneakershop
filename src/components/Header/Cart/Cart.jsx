import React from 'react';
import cl from '../Header.module.sass'
import cartImage from '../../../images/icons/cart.svg'
import { NavLink } from 'react-router-dom';

const Cart = (props) => {
  return (
    <div className={cl.cart}>
      <NavLink to='/cart' className={cl.cart_link}>
        <img src={cartImage} alt="cart icon link"/>
        <p className={cl.cart_sum}>{props.sum} руб.</p>
      </NavLink>
    </div>
  );
}

export default Cart;
