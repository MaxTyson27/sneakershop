import React from 'react';
import cl from './Product.module.sass';
import FavouriteButton from './Buttons/FavouriteButton';
import CartButton from './Buttons/CartButton';

const Product = ({info, toggleCartBtn, toggleFavouriteBtn, plusSumCart, minusSumCart, addPoductInCart, removeProductInCart}) => {

  return (
    <div className={cl.inner}>
      <FavouriteButton isFavourite={info.isFavourite} id={info.id} toggleFavouriteBtn={toggleFavouriteBtn}/>
      <img className={cl.image} src={info.image} alt="sneakers photo"/>
      <p className={cl.title}>{info.name}</p>
      <div className={cl.box}>
        <div className={cl.price}>
          <p className={cl.price_text}>Цена:</p>
          <p className={cl.price_num}>
            {info.price} руб.
          </p>
        </div>
        <CartButton 
          removeProductInCart={removeProductInCart} 
          toggleCartBtn={toggleCartBtn} 
          price={info.price} 
          plusSumCart={plusSumCart} 
          id={info.id} 
          isCart={info.isCart} 
          minusSumCart={minusSumCart} 
          addPoductInCart={addPoductInCart} 
          name={info.name} 
          image={info.image}/>
      </div>
    </div>
  );
}

export default Product;
