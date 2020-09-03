import {createMuiTheme} from '@material-ui/core/styles';

const mainBlue = '#4bb0f8';
const softWheat = '#dfd8c8';
const lightBeige = '#faf8f4';
const lightGray = '#6e757c';
const white = '#ffffff';
//const offWhite = '#f8f8ff';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: mainBlue,
    },
    secondary: {
      main: softWheat,
    },
    background: {
      main: lightBeige,
    },
    boxContentBudgetHeading: {
      main: lightGray,
    },
    // boxTitles: {
    //   main: offWhite,
    // },
    boxContentBudgetData: {
      main: white,
    },
  },
  typography: {
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Raleway',
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: 'Raleway',
      fontSize: '1.50rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: 'Raleway',
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    subtitle1: {
      lineHeight: 1.25,
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle2: {
      lineHeight: 1.25,
      fontSize: '.75rem',
      fontWeight: 500,
      color: white,
    },
    body1: {
      lineHeight: 1,
      fontSize: '1rem',
    },
  },
});

export default theme;
