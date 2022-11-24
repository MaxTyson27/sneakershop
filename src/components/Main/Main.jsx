import React from 'react';
import cl from './Main.module.sass';
import MainSlider from './MainSlider/MainSlider';

const Main = (props) => {
  return (
    <div className={cl.inner}>
      <div className="container">
        <MainSlider/>
      </div>
    </div>
  );
}

export default Main;
