import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';


const mapStateToProps = (state) => ({
  sum: state.cart.sum
})

export default connect(mapStateToProps, null)(Cart);
