import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoadingStatusProvider } from './contexts/FetchStatus';
import { GameProvider } from './contexts/GameContext';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <LoadingStatusProvider>
        <App />
      </LoadingStatusProvider>
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
