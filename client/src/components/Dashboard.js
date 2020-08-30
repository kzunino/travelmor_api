import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts';

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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.background.main,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: '1em',
    },
  },
  button: {
    marginTop: '1em',
    borderRadius: '2em',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  itemContainer: {},
  date: {
    backgroundColor: theme.palette.secondary.light,
    width: '25em',
    height: '25em',
  },
}));

const Dashboard = () => {
  const theme = useTheme();
  const classes = useStyles();

  const matchXs = useMediaQuery(theme.breakpoints.down('xs'));

  const data = [
    {
      name: 'Mon',
      // uv: 4000,
      $: 50,
      amt: 50,
    },
    {
      name: 'Tue',
      $: 100,
      amt: 100,
    },
    {
      name: 'Wed',
      $: 300,
      amt: 77,
    },
    {
      name: 'Thu',
      $: 150,
      amt: 150,
    },
    {
      name: 'Fri',
      $: 124,
      amt: 300,
    },
    {
      name: 'Sat',
      $: 86,
      amt: 223,
    },
    {
      name: 'Sun',
      $: 75,
      amt: 2100,
    },
  ];

  return (
    <>
      <main className={classes.content}>
        <Toolbar />
        <Grid container direction='column'>
          {/* -----Welcome Container----- */}
          <Grid item className={classes.itemContainer}>
            <Typography variant='h2'>Welcome, Kyle!</Typography>
            <Typography paragraph>
              Travelmor. allows you to easily add a trip and start tracking! The
              last trip that you created will show up here on your dashboard for
              easy access to enter any new expenses.
            </Typography>
          </Grid>
          <Divider />
          <Grid item className={classes.itemContainer}>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='h4'>
                  Create a trip to get started!
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant='outlined'
                  disableRipple
                  component={Link}
                  to='/newtrip'
                  className={classes.button}
                >
                  Create New Trip
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* -----Graphs Container----- */}
          <Grid item>
            <Grid container>
              <Grid item>
                <BarChart
                  width={matchXs ? 350 : 500}
                  height={500}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey='name' />
                  {/* <YAxis /> */}
                  <Tooltip />
                  {/* <Legend /> */}
                  <Bar dataKey='$' fill='#4bb0f8' />
                </BarChart>
              </Grid>
              <Grid item>
                <Grid container direction='column'>
                  <Grid item className={classes.date}>
                    <Typography variant='h5'>{Date.now()}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Dashboard;
