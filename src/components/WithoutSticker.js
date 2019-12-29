import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { theme } from '../utils/designTokens';

const WithoutSticker = props => (
  <div
    className={css(
      styles.emptyWrapper,
      props.number < 8 && styles.stickerMargin
    )}
  >
    <span className={css(styles.stickerNumber)}>{props.number}</span>
  </div>
);

const styles = StyleSheet.create({
  emptyWrapper: {
    width: theme.width,
    height: theme.height,
    border: '2px solid white',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '250px'
  },
  stickerNumber: {
    color: 'white',
    fontWeight: '600px',
    fontSize: '80px',
    fontFamily: theme.fontFamily.sans
  },
  stickerMargin: {
    margin: '0 0 30px 0'
  }
});

export default WithoutSticker;
