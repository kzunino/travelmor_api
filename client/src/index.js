import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './styles/theme';
import 'fontsource-roboto';
import './styles/global.css';

import App from './App';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Route component={App} />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
