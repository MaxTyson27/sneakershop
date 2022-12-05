import React from 'react';
import PrevButton from '../PrevButton/PrevButton';
import BoughtProduct from './BoughtProduct';
import cl from './Profile.module.sass';

const Profile = ({boughtProducts}) => {

  const productsElems = boughtProducts.map((item, index) => {
    return <BoughtProduct key={index} image={item.image} price={item.price} name={item.name} />
  })

  return (
    <div className={cl.wrapper}>
      <div className={cl.box}>
        <PrevButton/>
        <h2 className={cl.title}>Мои покупки</h2>
      </div>
      <div className={cl.row}>
        {productsElems}
      </div>
    </div>
  );
}

export default Profile;
