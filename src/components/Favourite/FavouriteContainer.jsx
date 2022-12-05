import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import cl from './Favourite.module.sass';
import { toggleCartBtn, toggleFavouriteBtn, showEmptyBlockInFavourites } from '../../redux/product-reducer';
import { plusSumCart, minusSumCart, addPoductInCart, removeProductInCart } from '../../redux/cart-reducer';
import Product from '../Main/MainContent/Product/Product';
import FavouriteEmpty from './FavouriteEmpty';
import PrevButton from '../PrevButton/PrevButton';

const FavouriteContainer = (props) => {

  useEffect(() => {
    props.showEmptyBlockInFavourites()
  }, [props.sneakers]);

  const productElems = props.sneakers.map((s) => {
    if(s.isFavourite) {
      return <Product key={s.id} info={s} {...props}/>
    }
  })

  if(!props.isEmptyFavouirites){
    return (
      <div className={cl.empty_row}>
        <FavouriteEmpty />    
      </div>
    )
  }

  return (
    <div className={cl.inner}>
      <div className="container">
        <div className={cl.box}>
          <PrevButton/>
          <h2 className={cl.title}>Мои закладки</h2>
        </div> 
        <div className={cl.row}>
          {productElems}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  sneakers: state.product.sneakers,
  isEmptyFavouirites: state.product.isEmptyFavouirites
})

export default connect(mapStateToProps, {toggleCartBtn, toggleFavouriteBtn, plusSumCart, minusSumCart, addPoductInCart, removeProductInCart, showEmptyBlockInFavourites})(FavouriteContainer);
