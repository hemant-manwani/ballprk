export const COLORS = {
  WHITE: '#ffffff',
  ERROR: '#ff2d4f',
  PRIMARY: '#007afa',
  SECONDARY: '#313743',
}

export default {
  typography: {
    useNextVariants: true,
  },
  fontFamily: 'Lato, Arial, sans-serif',
  palette: {
    primary: {
      main: COLORS.PRIMARY,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
    error: {
      main: COLORS.ERROR,
    },
  },
}