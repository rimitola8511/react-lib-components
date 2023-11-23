import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const lightTheme = createTheme({
  typography: {
    allVariants: { fontFamily: 'Montserrat, sans-serif' },
    h1: {
      fontSize: '38px',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: 1.3,
    },
    subtitle2: {
      fontWeight: 300,
    },
  },
  palette: {
    primary: {
      main: '#5938bd',
    },
    secondary: {
      main: grey[300],
      light: grey[100],
    },
  },
});
