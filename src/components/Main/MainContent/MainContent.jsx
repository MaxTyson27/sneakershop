import React from 'react';
import cl from './MainContent.module.sass';
import searchIcon from '../../../images/icons/search.svg'
import ProductContainer from './Product/ProductContainer';
const MainContent = () => {
  return (
    <div className={cl.inner}>
      <div className={cl.top}>
        <h2 className={cl.top_title}>Все кроссовки</h2>
        <input style={{backgroundImage: `url(${searchIcon})`}} className={cl.input} type="text" placeholder='Поиск...'/>
      </div>
      <ProductContainer/>
    </div>
  );
}

export default MainContent;
