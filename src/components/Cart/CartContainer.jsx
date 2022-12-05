import React from 'react';
import { connect } from 'react-redux';
import { setCartMode, removeProductInCart, minusSumCart, buyProducts, hideSuccess, setSuccess, resetSumCart } from '../../redux/cart-reducer';
import Cart from './Cart';
import cl from './Cart.module.sass';
import CartEmpty from './CartEmpty';
import { enableBodyScroll } from 'body-scroll-lock';
import { toggleCartBtn, resetBtns } from '../../redux/product-reducer';
import CartSuccess from './CartSuccess';

const CartContainer = ({setCartMode, cart, sum, tax, removeProductInCart, toggleCartBtn, minusSumCart, buyProducts, showSuccess, hideSuccess, setSuccess, resetBtns, resetSumCart}) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.bg} onClick={() => {
        setCartMode()
        enableBodyScroll(document)
        hideSuccess()
        }}></div>
      <div className={cl.inner}>
        <p className={cl.title}>
          Корзина
        </p>
        <div className={cl.box}>
          {cart.length > 0 ? 
          <Cart buyProducts={buyProducts} minusSumCart={minusSumCart} toggleCartBtn={toggleCartBtn} cart={cart} removeProductInCart={removeProductInCart} resetSumCart={resetSumCart} resetBtns={resetBtns} sum={sum} tax={tax} setSuccess={setSuccess}/> : 
          <CartEmpty hideSuccess={hideSuccess} setCartMode={setCartMode} showSuccess={showSuccess}/>}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  showSuccess: state.cart.showSuccess,
  sum: state.cart.sum,
  tax: state.cart.tax
})

export default connect(mapStateToProps, {setCartMode, removeProductInCart, toggleCartBtn, minusSumCart, buyProducts, hideSuccess, setSuccess, resetBtns, resetSumCart})(CartContainer);
