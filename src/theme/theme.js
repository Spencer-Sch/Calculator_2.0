import { createTheme } from '@material-ui/core';
import { cyan, deepOrange, grey } from '@material-ui/core/colors';

export const theme = createTheme({
  typography: {
    fontFamily: ['Orbitron', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: cyan[100],
    },
    secondary: {
      main: deepOrange[300],
    },
    operator: {
      main: cyan[200],
      dark: '#599ba3',
      equalsMain: '#35919d',
      equalsDark: '#006974',
    },
    disabled: {
      main: grey[500],
    },
  },
});
