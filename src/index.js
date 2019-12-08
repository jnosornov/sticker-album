import React from 'react';
import ReactDOM from 'react-dom';

import WithSticker from './components/WithSticker';
import WithoutSticker from './components/WithoutSticker';

import './styles.scss';

const App = () => {
  return (
    <div>
      <WithSticker />
      <WithoutSticker />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
