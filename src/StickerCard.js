import React from 'react';
import coral from './images/coral.jpg';

const StickerCard = () => {
  return (
    <div className="cardWrapper">
      <div className="stickerWrapper">
        <img className="sticker" src={coral} alt="coral" />
      </div>
    </div>
  );
};

export default StickerCard;
