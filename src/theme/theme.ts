import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4F46E5', // Modern Indigo
      light: '#818CF8',
      dark: '#3730A3',
    },
    secondary: {
      main: '#10B981', // Emerald green
      light: '#34D399',
      dark: '#059669',
    },
    background: {
      default: '#0A0A1F', // Deep dark blue
      paper: '#111132',
    },
    text: {
      primary: '#F9FAFB',
      secondary: '#D1D5DB',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '0.75rem 1.5rem',
        },
      },
    },
  },
});
