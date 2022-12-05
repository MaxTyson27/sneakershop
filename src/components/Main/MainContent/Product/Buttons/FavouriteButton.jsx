import React from 'react';
import cl from '../Product.module.sass';
import addFavouriteIcon from '../../../../../images/icons/heart.svg';
import addedFavouriteIcon from '../../../../../images/icons/addedHeart.svg';


const FavouriteButton = ({isFavourite, toggleFavouriteBtn, id}) => {

  const addedFavouriteStyle = {
    background: isFavourite ? "#FEF0F0" : '#ffffff',
    border: isFavourite ? '1px solid #F8F8F8' : '1px solid #FEF0F0'
  }

  const onFavouriteBtnClick = () => {
    toggleFavouriteBtn(id)
  }

  return (
    <button className={cl.favourite_btn} style={addedFavouriteStyle} onClick={onFavouriteBtnClick}>
        {isFavourite ? <img src={addedFavouriteIcon} alt="added product in favourite"/> : <img src={addFavouriteIcon} alt="add product in favourite"/>}
    </button>
  );
}

export default FavouriteButton;
