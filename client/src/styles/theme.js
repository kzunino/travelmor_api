import {createMuiTheme} from '@material-ui/core/styles';

const mainBlue = '#4bb0f8';
const softWheat = '#dfd8c8';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: mainBlue,
    },
    secondary: {
      main: softWheat,
    },
  },
});

export default theme;
