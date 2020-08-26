import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {makeStyles} from '@material-ui/core/styles';

import DataReports from '../imgs/undraw_data_reports_706v.svg';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.main,
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  dataReports: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  icons: {
    height: '100%',
    width: '100%',
  },
}));

const LandingPageContent = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      {/* Outer grid component that wraps all grid content */}
      <Grid container direction='column'>
        <Grid item>
          <Grid
            container
            justify='flex-start'
            alignItems='center'
            direction='row'
          >
            <Grid sm item>
              <Typography variant='h4' align='center'>
                Get insights on your travel spending so you can get the most
                from your travels
              </Typography>
            </Grid>
            <Grid sm item className={classes.dataReports}>
              <img
                alt='screenshots of travelmor app'
                src={DataReports}
                className={classes.icons}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default LandingPageContent;
