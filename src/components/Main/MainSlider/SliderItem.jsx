import React from 'react';
import mainImage from '../../../images/main.png';
import cl from './MainSlider.module.sass';

const SliderItem = () => {

  return (
    <div className={cl.item} style={{backgroundImage: `url(${mainImage})`}}>
      <h1 className={cl.item_title}>
        <span>Stan Smith</span>,<br/>Forever!
      </h1>
      <button className={cl.item_button} type='button'>Купить</button>
    </div>
  );
}

export default SliderItem;
