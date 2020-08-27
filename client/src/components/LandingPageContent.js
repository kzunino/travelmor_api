import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import DataReports from '../imgs/undraw_data_reports_706v.svg';
import Traveler from '../imgs/undraw_stranded_traveler_pdbw.svg';

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
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginBottom: '2em',
    },
  },
  dataReports: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  iconContainer: {
    marginRight: '2em',
    marginTop: '10em',
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  icons: {
    height: '100%',
    width: '100%',
  },
  divider: {
    background: theme.palette.primary.main,
  },
}));

const LandingPageContent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <main className={classes.content}>
      {/* Outer grid component that wraps all grid content */}
      <Grid container direction='column' className={classes.mainContainer}>
        {/* ------------- Hero Block ---------- */}
        <Grid item>
          <Grid
            container
            justify='flex-start'
            alignItems='center'
            direction='row'
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography
                variant={matchesSm ? 'h4' : 'h2'}
                align='center'
                className={classes.heroTextContainer}
              >
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
        {/* ------------- Services Container ---------- */}
        <Grid item>
          <Grid
            container
            justify='flex-start'
            alignItems='center'
            direction='row'
          >
            <Grid sm item className={classes.iconContainer}>
              <img
                alt='screenshots of travelmor app'
                src={Traveler}
                className={classes.icons}
              />
            </Grid>
            <Grid sm item className={classes.servicesContainer}>
              <Grid container direction='column'>
                <Grid item>
                  <Typography
                    variant={matchesSm ? 'h4' : 'h3'}
                    align='center'
                    className={classes.heroTextContainer}
                  >
                    Smart and Light Weight Budgeting
                    <Divider
                      variant='middle'
                      classes={{root: classes.divider}}
                    />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default LandingPageContent;
