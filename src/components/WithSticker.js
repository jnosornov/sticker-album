import React from 'react';
import coral from '../images/coral.jpg';

import { StyleSheet, css } from 'aphrodite';

const WithSticker = () => (
  <div className={css(styles.imageWrapper)}>
    <img className={css(styles.image)} src={coral} alt="coral" />
  </div>
);

const styles = StyleSheet.create({
  imageWrapper: {
    width: '400px',
    heigth: '400px',
    border: '8px solid white',
    display: 'inline-block'
  },
  image: {
    width: '100%',
    display: 'block'
  }
});

export default WithSticker;
