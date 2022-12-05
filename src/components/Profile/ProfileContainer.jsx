import React from 'react';
import { connect } from 'react-redux';
import cl from './Profile.module.sass';
import ProfileEmpty from './ProfileEmpty';
import Profile from './Profile';

const ProfileContainer = ({boughtProducts}) => {
  return (
    <div className={cl.inner}>
      <div className="container">
        {boughtProducts.length > 0 ? <Profile boughtProducts={boughtProducts}/> : <ProfileEmpty/>}
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  boughtProducts: state.cart.boughtProducts
})

export default connect(mapStateToProps, null)(ProfileContainer);
