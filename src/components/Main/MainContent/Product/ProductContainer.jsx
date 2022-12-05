import React from 'react';
import { connect } from 'react-redux';
import { toggleCartBtn, toggleFavouriteBtn } from '../../../../redux/product-reducer';
import { plusSumCart, minusSumCart, addPoductInCart, removeProductInCart } from '../../../../redux/cart-reducer';
import Product from './Product';
import cl from './Product.module.sass';

const ProductContainer = (props) => {

  const productElems = props.sneakers.map(info => {
    return (
      <Product key={info.id} info={info} {...props}/>
    )
  })

  return (
    <div className={cl.wrapper}>
      {productElems}
    </div>
  );
}

const mapStateToProps = (state) => ({
  sneakers: state.product.sneakers
})


export default connect(mapStateToProps, {toggleCartBtn, toggleFavouriteBtn, plusSumCart, minusSumCart, addPoductInCart, removeProductInCart})(ProductContainer);
