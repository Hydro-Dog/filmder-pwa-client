/* eslint-disable no-unused-vars */

import { ThemeOptions, createTheme } from '@mui/material/styles';

const defaultSnippets = createTheme({
  components: {
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
    MuiButton: {
      defaultProps: {
        // disableRipple: true,
      },
      // styleOverrides: {
      //   root: {
      //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      //   }
      // }
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
      paper: '#fff9f3',
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
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'rgba(50,50,50,1)',
        },
      },
    },
  },
});

export const darkTheme: ThemeOptions = createTheme(defaultSnippets, {
  palette: {
    text: {
      primary: 'rgba(234,230,220,1)',
    },
    background: {
      default: '#383838',
      paper: '#464646',
    },
    primary: {
      main: '#B94444',
      light: '#DA5252',
      dark: '#8E3636',
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
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'rgba(234,230,220,1)',
        },
      },
    },
  },
});
