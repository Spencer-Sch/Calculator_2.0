import { createTheme } from '@material-ui/core';
import { cyan, deepOrange, grey } from '@material-ui/core/colors';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1265,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['Orbitron', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    htmlFontSize: '16',
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
  overrides: {
    MuiPaper: {
      elevation1: {
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiContainer: {
      root: {
        '@media (min-width: 600px)': {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      },
    },
  },
});

theme.shadows.push(
  `inset 0px 12px 8px -10px ${grey[600]}, inset 0px -16px 8px -10px ${grey[600]}, inset 12px 0px 8px -10px ${grey[600]}, inset -16px 0px 8px -10px ${grey[600]}`
);
