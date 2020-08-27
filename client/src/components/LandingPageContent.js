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
  contentBlock: {
    marginBottom: '5em',
  },
  heroTextContainer: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  dataReports: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: '2em',
    },
  },
  iconContainer: {
    marginRight: '2em',
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  icons: {
    height: '100%',
    width: '100%',
  },
  divider: {
    marginTop: '1em',
    background: theme.palette.primary.dark,
  },
  servicesContainer: {
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      marginTop: '3em',
    },
  },
  servicesTextContainer: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  subheading: {
    marginTop: '1em',
    color: theme.palette.primary.main,
  },
}));

const LandingPageContent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <main className={classes.content}>
      {/* Outer grid component that wraps all grid content */}
      <Grid container direction='column' className={classes.mainContainer}>
        {/* ------------- Hero Block ---------- */}
        <Grid item className={classes.contentBlock}>
          <Grid
            container
            justify='flex-start'
            alignItems='center'
            direction='row'
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography
                variant={matchesSm ? 'h4' : 'h3'}
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
              <Grid
                container
                direction='column'
                alignItems='center'
                justify='center'
              >
                <Grid item>
                  <Typography
                    variant={matchesXs ? 'h5' : 'h4'}
                    className={classes.servicesTextContainer}
                  >
                    Smart &amp; Easy Budgeting
                  </Typography>
                  <Typography variant='subtitle1'>
                    An easy way to monitor your travel budget to make the most
                    of your experiences.
                    <Divider
                      variant='fullWidth'
                      classes={{root: classes.divider}}
                    />
                  </Typography>

                  <Typography variant='h6' className={classes.subheading}>
                    Stay accountable
                  </Typography>
                  <Typography variant='body1'>
                    Update your budget and get real time graphics that give you
                    a 4D overview of your expenses.
                  </Typography>

                  <Typography variant='h6' className={classes.subheading}>
                    On-the-go financial clarity
                  </Typography>
                  <Typography variant='body1'>
                    Highlights of your recent spending and budget for a clear
                    picture of you budget.
                  </Typography>

                  <Typography variant='h6' className={classes.subheading}>
                    Forecasting
                  </Typography>
                  <Typography variant='body1'>
                    Clear data that helps you make the most of your spending.
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
