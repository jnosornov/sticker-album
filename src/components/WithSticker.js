import React from 'react';
import coral from '../images/coral.jpg';

import { StyleSheet, css } from 'aphrodite';
import { theme } from '../utils/designTokens';

const WithSticker = () => (
  <div className={css(styles.imageWrapper)}>
    <img className={css(styles.image)} src={coral} alt="coral" />
  </div>
);

const styles = StyleSheet.create({
  imageWrapper: {
    width: theme.width,
    heigth: theme.height,
    border: '8px solid white',
    display: 'inline-block'
  },
  image: {
    width: '100%',
    display: 'block'
  }
});

export default WithSticker;
