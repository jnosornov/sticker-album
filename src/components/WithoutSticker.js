import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { theme } from '../utils/designTokens';

const WithoutSticker = () => (
  <div className={css(styles.emptyWrapper)}>
    <span className={css(styles.stickerNumber)}>101</span>
  </div>
);

const styles = StyleSheet.create({
  emptyWrapper: {
    width: '400px',
    height: '400px',
    border: '2px solid white',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '400px'
  },
  stickerNumber: {
    color: 'white',
    fontWeight: '600px',
    fontSize: '110px',
    fontFamily: theme.fontFamily.sans
  }
});

export default WithoutSticker;
