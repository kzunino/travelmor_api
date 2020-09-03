import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1em',
  },
  toolbar: {
    padding: 0,
  },
  container: {
    width: '50%',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: drawerWidth,
    marginBottom: 50,
    backgroundColor: theme.palette.background.main,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      padding: theme.spacing(1, 1.5),
      marginTop: '1em',
    },
  },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'white',
    fontWeight: 'bold',
    width: '50%',
  },
}));

const NewTrip = () => {
  const theme = useTheme();
  const classes = useStyles();

  const matchXs = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultDate = Moment(Date.now()).format('YYYY-MM-DD');

  return (
    <>
      <main className={classes.content}>
        <Toolbar />
        <Grid direction='column' className={classes.containerWrapper}>
          {/* -----Welcome Container----- */}
          <Grid item>
            <Typography variant={matchXs ? 'h4' : 'h2'}>New Trip</Typography>
          </Grid>
          <Divider />
          <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <form className={classes.form} noValidate>
              <TextField
                variant='standard'
                margin='normal'
                required
                fullWidth
                id='trip_name'
                label='Trip Name'
                name='trip_name'
                autoFocus
              />
              <TextField
                variant='standard'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
              />

              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.submit}
                disableRipple
              >
                Create Trip
              </Button>
              <Grid container></Grid>
            </form>
          </Container>
        </Grid>
      </main>
    </>
  );
};

export default NewTrip;
