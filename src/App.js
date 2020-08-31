import React, { useState, useEffect } from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  Paper
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import MainMenu from './pages/MainMenu';
import GameStart from './pages/GameStart';
import InternalSubscriptions from './services/internalSubscriptions/InternalSubscriptions';
import EngineWorker from 'workerize-loader!./engine/EngineWorker.js'; //eslint-disable-line import/no-webpack-loader-syntax

const workerInstance = EngineWorker();
workerInstance.addEventListener('message', (message) => {
  console.log('new message:', message.data);
});
workerInstance.doThing();

const appTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: green[500]
      },
      secondary: {
        main: blue[500]
      }
    }
  })
);

const pageToComponent = (page) => {
  switch (page) {
    case 'main-menu':
      return MainMenu;
    case 'game-start':
      return GameStart;
    default:
      return <div />;
  };
};

export default function App() {
  const [page, setPage] = useState(<GameStart />);
  const handlePageChange = (newPage) => {
    const component = pageToComponent(newPage);
    setPage(component);
  }

  useEffect(() => {
    InternalSubscriptions.subscribe('change-page', handlePageChange);
    return () => {
      InternalSubscriptions.unsubscribe('change-page', handlePageChange);
    }
  });

  return (
    <ThemeProvider theme={appTheme}>
      <Paper
        style={{
          borderRadius: '0',
          height: '100vh'
        }}
      >
        {page}
      </Paper>
    </ThemeProvider>
  );
}
