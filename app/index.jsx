import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game.jsx';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <Game />,
  document.getElementById('app')
);
