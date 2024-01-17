// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E81B0', // Bright Blue
    },
    secondary: {
      main: '#F57C00', // Neon Orange
    },
    error: {
      main: '#E57373',
    },
    warning: {
      main: '#FFCA28', // Bright Yellow or Gold
    },
    info: {
      main: '#00BCD4', // Light Blue or Cyan
    },
    success: {
      main: '#66BB6A',
    },
    background: {
      default: '#0D1F2D', // Dark Navy Blue
    },
    text: {
      primary: '#F57C00', // 
      secondary: '#0D1F2D', // Dark Navy Blue
    },
  },
  // Other customizations can go here
});

export default theme;
