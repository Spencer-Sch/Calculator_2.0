import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline, ThemeProvider } from '@material-ui/core';

import App from './App';
import { theme } from './theme/theme';
import { configureDataStore } from './hooks-store/data-store';
import { configureHistoryStore } from './hooks-store/history-store';

configureDataStore();
configureHistoryStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
