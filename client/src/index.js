import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './styles/theme';

//date picker provider

import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import 'fontsource-roboto';
import './styles/global.css';

import App from './App';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);
