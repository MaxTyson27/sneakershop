import React from 'react';
import cl from './Favourite.module.sass';
import smileImage from '../../images/favourite/smile.png';
import arrowBtn from '../../images/cart/arrow.svg';
import { NavLink } from 'react-router-dom';

const FavouriteEmpty = (props) => {
  return (
    <div className={cl.empty}>
      <div className={cl.empty_inner}>
        <img src={smileImage} className={cl.empty_image} alt="sad smile"/>
        <h3 className={cl.empty_title}>Закладок нет :(</h3>
        <p className={cl.empty_text}>Вы ничего не добавляли в закладки</p>
        <NavLink to='/'>
          <button className={cl.empty_btn} type='button'>
            <img src={arrowBtn} alt="come back arrow"/>
            <p>Вернуться назад</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default FavouriteEmpty;
