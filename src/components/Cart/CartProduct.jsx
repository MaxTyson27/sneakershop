import React from 'react';
import cl from './Cart.module.sass';
import removeIcon from '../../images/cart/remove.svg'

const CartProduct = ({cart, removeProductInCart, toggleCartBtn, minusSumCart}) => {

  const onClick = () => {
    removeProductInCart(cart.id)
    toggleCartBtn(cart.id)
    minusSumCart(+cart.price.replace(/ /g,''))
  }

  return (
    <div className={cl.product}>
      <img src={cart.image} alt={cart.name} className={cl.product_image}/>
      <div className={cl.product_box}>
        <p className={cl.product_name}>{cart.name}</p>
        <p className={cl.product_price}>{cart.price} руб.</p>
      </div>
      <button className={cl.product_remove} onClick={onClick}>
        <img src={removeIcon} alt="remove"/>
      </button>
    </div>
  );
}

export default CartProduct;
