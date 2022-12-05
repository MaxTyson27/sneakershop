import React from 'react';
import cl from './Profile.module.sass';

const BoughtProduct = ({image, price, name}) => {
  return (
    <div className={cl.product}>
      <img src={image} alt="sneakers" className={cl.image}/>
      <p className={cl.name}>{name}</p>
      <p className={cl.price}><span>Цена:</span><br/>{price}</p>
    </div>
  );
}

export default BoughtProduct;
