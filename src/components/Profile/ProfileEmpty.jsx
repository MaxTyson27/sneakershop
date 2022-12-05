import React from 'react';
import cl from './Profile.module.sass';
import smileImage from '../../images/profile/smile.png';
import arrowIcon from '../../images/cart/arrow.svg';
import { NavLink } from 'react-router-dom';

const ProfileEmpty = () => {
  return (
    <div className={cl.profile_empty}>
      <img src={smileImage} alt="sad smile" className={cl.profile_empty_image}/>
      <h3 className={cl.profile_empty_title}>У вас нет заказов</h3>
      <p className={cl.profile_empty_text}>Вы нищеброд?<br/>Оформите хотя бы один заказ.</p>
      <NavLink to='/'>
        <button className={cl.profile_empty_button}>
          <img src={arrowIcon} alt="arrow prev"/>
          <p>Вернуться назад</p>
        </button>
      </NavLink>
    </div>
  );
}

export default ProfileEmpty;
