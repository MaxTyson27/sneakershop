import React from 'react';
import { useNavigate } from 'react-router-dom';
import prevIcon from '../../images/icons/prevIcon.svg';
import cl from './PrevButton.module.sass';


const PrevButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <button className={cl.button_prev} onClick={handleClick} type='button'>
      <img src={prevIcon} alt="prev button"/>
    </button>
  );
}

export default PrevButton;

