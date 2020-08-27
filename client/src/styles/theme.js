import {createMuiTheme} from '@material-ui/core/styles';

const mainBlue = '#4bb0f8';
const softWheat = '#dfd8c8';
const lightBeige = '#faf8f4';

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
  },
});

export default theme;
