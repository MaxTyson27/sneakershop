import React from 'react';
import cl from './Main.module.sass';
import MainContentContainer from './MainContent/MainContentContainer';
import MainSlider from './MainSlider/MainSlider';

const Main = (props) => {
  return (
    <div className={cl.inner}>
      <div className="container">
        <MainSlider/>
        <MainContentContainer/>
      </div>
    </div>
  );
}

export default Main;
