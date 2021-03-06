import { createTheme, responsiveFontSizes } from '@mui/material'

const primary = '#262626'
const primaryLight = '#A5A5A5'
const secondary = '#F6A192'
const secondaryDark = '#F47B68'
const secondaryLight = '#FAC6BC'
const white = '#FFFFFF'

let theme = createTheme({
  palette: {
    primary: { 
      main: primary,
      light: primaryLight
    },
    secondary: { 
      main: secondary,
      dark: secondaryDark,
      light: secondaryLight
    },
    white: {
      main: white
    }
  },
  typography: {
    fontFamily: [
      'Playfair Display',
      'Roboto'
    ].join(','),
    h1: {
      fontFamily: 'Roboto',
      fontSize: '2.4rem',
      fontWeight: 'bolder'
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: '1.6rem',
      fontWeight: 'bold'
    },
    h5: {
      fontFamily: 'Roboto',
      fontSize: '0.9rem',
      '@media (min-width:600px)': {
        fontSize: '1.2rem'
      }
    },
    h6: {
      fontFamily: 'Roboto',
      fontSize: '0.8rem',
      '@media (min-width:600px)': {
        fontSize: '1.0rem'
      }
    },
    landing: {
      fontFamily: 'Roboto',
      fontSize: '1.4rem',
      fontWeight: 'bold',
      '@media (min-width:600px)': {
        fontSize: '2.0rem'
      }
    },
    mainlogo: {
      fontFamily: 'Playfair Display',
      fontSize: '1.8rem',
    },
    navlink: {
      fontFamily: 'Roboto',
      fontSize: '1.2rem',
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
