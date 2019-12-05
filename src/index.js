import React from 'react';
import ReactDOM from 'react-dom';

import StickerCard from './StickerCard';
import './styles.scss';

const App = () => {
  return <StickerCard />;
};

ReactDOM.render(<App />, document.getElementById('root'));
