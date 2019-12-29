import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

import WithSticker from './components/WithSticker';
import WithoutSticker from './components/WithoutSticker';

import './styles.scss';

const stickers = new Array(12).fill(null);

const App = () => {
  return (
    <div className={css(styles.page)}>
      <div className={css(styles.stickerPage)}>
        {stickers.map((el, index) => (
          <WithoutSticker number={index + 1} key={index} />
        ))}
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  stickerPage: {
    border: '2px solid tomato',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'center',
    maxWidth: '1500px'
  },
  page: {
    height: '100%'
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
