import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  typography: {
    fontFamily: ['Orbitron', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#b2ebf2',
    },
    secondary: {
      main: '#ff8a65',
    },
  },
});
