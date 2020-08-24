import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../imgs/travelmor_square.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1em',
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbar: {
    padding: 0,
  },
  logoContainer: {
    padding: 0,
  },
  logo: {
    width: drawerWidth,
    height: '5.5em',
  },
  login: {
    marginLeft: 'auto',
  },
}));

const LandingPage = () => {
  //const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='static' className={classes.appBar} color='secondary'>
        <Toolbar className={classes.toolbar}>
          <Button
            component={Link}
            to='/'
            className={classes.logoContainer}
            disableRipple
          >
            <img src={logo} alt='Travelmor.logo' className={classes.logo} />
          </Button>
          <Button className={classes.login} component={Link} to='/login'>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LandingPage;
