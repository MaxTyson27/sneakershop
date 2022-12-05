import React, { useEffect } from 'react';
import cl from './Cart.module.sass';
import CartProduct from './CartProduct';
import arrowIcon from '../../images/cart/arrowRight.svg';

const Cart = ({cart, sum, tax, removeProductInCart, toggleCartBtn, minusSumCart, buyProducts, setSuccess, resetBtns, resetSumCart}) => {
  // useEffect(() => {
    
  // }, [sum, tax]);

  const onButtonClick = () => {
    buyProducts()
    setSuccess()
    resetBtns()
    resetSumCart()
  }

  const productElems = cart.map((p) => {
    return <CartProduct key={p.id} cart={p} removeProductInCart={removeProductInCart} toggleCartBtn={toggleCartBtn} minusSumCart={minusSumCart}/>
  })

  return (
    <div className={cl.products_box}>
      <div className={cl.products}>
        {productElems}
      </div>
      <div className={cl.products_bottom}>
        <div className={cl.products_sum}>
          <p className={cl.products_text}>Итого:</p>
          <div className={cl.products_border}></div>
          <p className={cl.products_num}>{sum} руб.</p>
        </div>
        <div className={cl.products_sum}>
          <p className={cl.products_text}>Налог 5%:</p>
          <div className={cl.products_border}></div>
          <p className={cl.products_num}>{tax} руб.</p>
        </div>
        <button className={cl.products_btn} onClick={onButtonClick}>
          <p>Оформить заказ</p>
          <img src={arrowIcon} alt="next arrow"/>
        </button>
      </div>
    </div>
  );
}

export default Cart;
