/* eslint-disable no-unused-vars */

import { ThemeOptions, createTheme } from '@mui/material/styles';

const defaultSnippets = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {

      },
    },
    MuiSlider: {
      styleOverrides: {
        valueLabel: ({ ownerState, theme }) => ({
          ...(ownerState.orientation === 'vertical' && {
            backgroundColor: 'transparent',
            color: theme.palette.grey[500],
          }),
        }),
      },
    },
  },

});

export const lightTheme: ThemeOptions = createTheme(defaultSnippets, {
  palette: {
    text: {
      primary: 'rgba(50,50,50,1)',
    },
    background: {
      default: '#f9eee4',
      paper: '#efefef',
    },
    primary: {
      main: '#aa1639',
      light: '#A74363',
      dark: '#660E2A',
    },
    secondary: {
      main: '#aa7b16',
      light: '#BB9544',
      dark: '#76560F',
    },
    error: {
      main: '#aa3116',
      light: '#BB5A44',
      dark: '#76220F',
    },
    warning: {
      main: '#aa168f',
      light: '#BB44A5',
      dark: '#760F64',
    },
    info: {
      main: '#169faa',
      light: '#44B2BB',
      dark: '#0F6F76',
    },
    success: {
      main: '#16aa7b',
      light: '#44BB95',
      dark: '#0F7656',
      contrastText: 'rgba(0,0,0,0.7)',
    },
  },
});

export const darkTheme: ThemeOptions = createTheme(defaultSnippets, {
  palette: {
    text: {
      primary: 'rgba(234,230,220,1)',
    },
    background: {
      default: '#141414',
      paper: '#1e1e1e',
    },
    primary: {
      main: '#aa1639',
      light: '#A74363',
      dark: '#660E2A',
    },
    secondary: {
      main: '#aa7b16',
      light: '#BB9544',
      dark: '#76560F',
    },
    error: {
      main: '#aa3116',
      light: '#BB5A44',
      dark: '#76220F',
    },
    warning: {
      main: '#aa168f',
      light: '#BB44A5',
      dark: '#760F64',
    },
    info: {
      main: '#169faa',
      light: '#44B2BB',
      dark: '#0F6F76',
    },
    success: {
      main: '#16aa7b',
      light: '#44BB95',
      dark: '#0F7656',
      contrastText: 'rgba(0,0,0,0.7)',
    },
  },
});
