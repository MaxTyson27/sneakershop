import React from 'react';
import cl from '../Product.module.sass';
import addCartIcon from '../../../../../images/icons/add.svg';
import addedCartIcon from '../../../../../images/icons/added.svg';

const CartButton = ({isCart, toggleCartBtn, id, plusSumCart, price, minusSumCart, addPoductInCart, name, image, removeProductInCart}) => {

  const addedCartStyle = {
    background: isCart ? "linear-gradient(180deg, #89F09C 0%, #3CC755 100%)" : '#ffffff'
  }

  const onCartBtnClick = () => {
    toggleCartBtn(id)
    if(isCart){
      minusSumCart(+price.replace(/ /g,''))
      removeProductInCart(id)
    } else {
      plusSumCart(+price.replace(/ /g,''))
      addPoductInCart({id, price, name, image})
    }
    
  }

  return (
    <button className={cl.cart_btn} style={addedCartStyle} onClick={onCartBtnClick}>
      {isCart ? <img src={addedCartIcon} alt="added product in cart"/> : <img src={addCartIcon} alt="add product in cart"/>}
    </button>
  );
}

export default CartButton;
