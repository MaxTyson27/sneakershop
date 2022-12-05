import React from 'react';
import { connect } from 'react-redux';
import { setCartMode } from '../../../redux/cart-reducer';
import HeaderCart from './HeaderCart';

const mapStateToProps = (state) => ({
  sum: state.cart.sum
})

export default connect(mapStateToProps, {setCartMode})(HeaderCart);
