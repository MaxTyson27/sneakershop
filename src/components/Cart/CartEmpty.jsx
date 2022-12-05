import React from 'react';
import cl from './Cart.module.sass';
import boxImage from '../../images/cart/box.png';
import successImage from '../../images/cart/success.png';
import arrowIcon from '../../images/cart/arrow.svg';
import { enableBodyScroll } from 'body-scroll-lock';

const CartEmpty = ({setCartMode, showSuccess, hideSuccess}) => {

  const onBtnClick = () => {
    setCartMode()
    enableBodyScroll(document)
    hideSuccess()
  }
  
  return (
    <div className={cl.cart_empty_box}>
      <div className={cl.cart_empty}>
        {showSuccess ? <img className={cl.image} src={successImage} alt="success cart"/> : <img className={cl.image} src={boxImage} alt="empty cart image"/>}
        <p style={{color: showSuccess ? '#87C20A' : '#000'}} className={cl.cart_empty_title}>
          {showSuccess ? 'Заказ оформлен!' : 'Корзина пустая'}
        </p>
        <p className={cl.cart_empty_text}>
          { showSuccess ? 'Ваш заказ #18 скоро будет передан курьерской доставке.' : 'Добавьте хотя&nbsp;бы одну пару кроссовок, чтобы сделать заказ.'}
        </p>
        <button className={cl.cart_empty_btn} onClick={onBtnClick}>
          <img src={arrowIcon} alt="arrow"/>
          <p>Вернуться назад</p>
        </button>
      </div>
    </div>
  );
}

export default CartEmpty;
