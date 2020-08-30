import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

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
      padding: theme.spacing(1, 0.5),
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

  graphItem: {
    backgroundColor: theme.palette.secondary.light,
    marginTop: '2em',
  },

  date: {
    marginLeft: 'auto',
    padding: '1em',
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
      name: 'Today',
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
          <Grid item>
            <Typography variant={matchXs ? 'h4' : 'h2'}>
              Welcome, Kyle!
            </Typography>
          </Grid>
          <Divider />
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant={matchXs ? 'h5' : 'h4'}>
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
          <Box m={1} boxShadow={3} className={classes.graphItem}>
            <Grid item>
              <Grid container justify='space-between'>
                <Grid item xs={12}>
                  <Grid container justify='center'>
                    <Grid item>
                      <Typography variant='h3'>Peru Trip</Typography>
                      <Typography variant='subtitle2'>
                        Aug 30th - Sept 10th
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid sm={7} item>
                  <BarChart
                    width={matchXs ? 350 : 500}
                    height={matchXs ? 250 : 400}
                    data={data}
                    margin={{
                      top: 20,
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
                <Grid xs={5} sm={3} item>
                  <Grid container direction='column'>
                    <Grid item className={classes.date}>
                      <Typography variant='h6'>
                        {Moment(Date.now()).format('MMM Do, YYYY')}
                      </Typography>
                    </Grid>
                    <Grid container direction='row'>
                      <Grid item className={classes.date}>
                        <Typography variant='subtitle2'>trip budget</Typography>
                        <Typography variant='h6'>$1,000.00</Typography>
                      </Grid>
                      <Grid item className={classes.date}>
                        <Typography variant='subtitle2'>
                          daily budget
                        </Typography>
                        <Typography variant='h6'>$50.00</Typography>
                      </Grid>
                    </Grid>
                    <Divider />
                    <Grid item className={classes.date}>
                      <Typography variant='subtitle2'>spent today</Typography>
                      <Typography variant='h6'>$40.00</Typography>
                    </Grid>
                    <Grid item className={classes.date}>
                      <Typography variant='subtitle2'>remaining</Typography>
                      <Typography variant='h6'>$10.00</Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container direction='row'>
                    <Grid item>
                      <Typography variant='subtitle2'>
                        total daily average spent
                      </Typography>
                      <Typography variant='h6'>$43.50</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle2'>
                      new daily budget to stay on target
                    </Typography>
                    <Typography variant='h6'>$54.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </main>
    </>
  );
};

export default Dashboard;
