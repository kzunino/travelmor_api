import React from 'react';
import Moment from 'moment';
import {Link} from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Table Imports

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1em',
  },
  root: {
    width: '100%',
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
  containerWrapper: {
    margin: 'auto',
  },
  mainContentBox: {
    //backgroundColor: theme.palette.secondary.light,
    backgroundColor: theme.palette.background.main,
    marginTop: '2em',
    marginLeft: 0,
    marginRight: 0,
    paddingTop: '1em',
    paddingBottom: '1em',
    display: 'flex',
  },
  listItemBackground1: {
    margin: 0,
    backgroundColor: theme.palette.secondary.main,
  },
  listItemBackground2: {
    backgroundColor: theme.palette.secondary.light,
  },
  listItem: {
    width: '100%',
  },
}));

const History = () => {
  const theme = useTheme();
  const classes = useStyles();
  // const [checked, setChecked] = React.useState(['wifi']);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  const matchXs = useMediaQuery(theme.breakpoints.down('xs'));

  let trips = [
    {
      trip_uid: 234234,
      trip_name: 'Peru Trip',
      start_date: '08-30-2020',
      end_date: '09-30-2020',
    },
    {
      trip_uid: 234234,
      trip_name: 'Canada Trip',
      start_date: '12-02-2020',
      end_date: '12-24-2020',
    },
    {
      trip_uid: 2342545,
      trip_name: 'Ecuador Trip',
      start_date: '08-30-2019',
      end_date: '09-30-2019',
    },
    {
      trip_uid: 6575456,
      trip_name: 'Colombia Trip',
      start_date: '08-30-2018',
      end_date: '09-30-2018',
    },
    {
      trip_uid: 8979675,
      trip_name: 'Mexico Trip',
      start_date: '08-30-2017',
      end_date: '09-30-2017',
    },
  ];

  // Grabs and filters out all years that trip has been taken
  let tripYears = [];
  trips.forEach((trip, index) => {
    if (tripYears.indexOf(trip.start_date.slice(-4)) === -1)
      tripYears.push(trip.start_date.slice(-4));
  });

  return (
    <main className={classes.content}>
      <Toolbar />
      <Grid container direction='column' className={classes.containerWrapper}>
        <Grid item>
          <Typography variant={matchXs ? 'h4' : 'h2'}>
            All Trip History
          </Typography>
        </Grid>
        <Divider />
        <Container maxWidth={'md'}>
          <Box m={1} boxShadow={3} className={classes.mainContentBox}>
            <Grid item>
              <Grid container>
                <Grid item>
                  {/* map over trips to get years then map over trips in that year to list them */}
                  {tripYears.map((trip, index) => (
                    <List
                      subheader={
                        <ListSubheader>
                          {Moment(trip.start_date).format('YYYY')}
                        </ListSubheader>
                      }
                      className={classes.root}
                    >
                      <ListItem
                        className={classes.listItem}
                        component={Link}
                        to={`/history/${trip.trip_uid}`}
                      >
                        <ListItemText
                          classes={{root: classes.listItem}}
                          id='switch-list-label-wifi'
                          primary={`${trip.trip_name}`}
                        />
                      </ListItem>
                    </List>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </main>
  );
};

export default History;
