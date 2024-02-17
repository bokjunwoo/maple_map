import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { GlobalStateProvider } from './context/GlobalStateProvider';

const theme = createTheme({
  palette: {
    background: {
      default: 'white',
    },
  },
  typography: {
    fontFamily: 'Noto Sans KR',
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStateProvider>
        <CssBaseline />
        <App />
      </GlobalStateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
