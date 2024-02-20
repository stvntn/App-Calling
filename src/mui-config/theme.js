
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF'
      },
      primaryLight: {
        main: '#f7dcc1'
      },
      secondary: {
        main: '#5367AE',
        medium: '#FDECE0'
      },
      secondaryDark: {
        main: '#364270'
      },
      white: {
        main: '#FFFFFF'
      },
      blackGrey: {
        main: '#14140A'
      },
      black: {
        main: '#000000'
      },
      grey: {
        main: '#BCBCBC',
        secondary: '#F5F0EB'
      },
      lightGreen: {
        main: '#7DDF00'
      },
      success:{
        main: '#00DB4A'
      },
      successBtn:{
        main: '#3EC200'
      },
      errorBtn:{
        main: '#FF0000'
      },
    },
    typography: {
      fontFamily: [
        'Satoshi',
        'sans-serif',
      ].join(','),
   },
   components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#EF812E',
            color:'#fff',
            borderRadius: '8px',
            justifyContent: 'space-between',
            '& .MuiList-root': {
              height: '100%'
            }
          }
        }
      },

    }
});

export default theme;








