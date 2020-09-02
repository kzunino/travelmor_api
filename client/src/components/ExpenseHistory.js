import React from 'react';
import ReactDOM from 'react-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Table Imports

// Chart Imports
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1em',
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
}));

const data = [
  {
    name: 'Page A',
    daily_budget: 50,
    total_daily_spent: 12,
    amt: 2400,
  },
  {
    name: 'Page B',
    daily_budget: 50,
    total_daily_spent: 45,
    amt: 2210,
  },
  {
    name: 'Page C',
    daily_budget: 50,
    total_daily_spent: 56,
    amt: 2290,
  },
  {
    name: 'Page D',
    daily_budget: 50,
    total_daily_spent: 14,
    amt: 2000,
  },
  {
    name: 'Page E',
    daily_budget: 50,
    total_daily_spent: 45,
    amt: 2181,
  },
  {
    name: 'Page F',
    daily_budget: 50,
    total_daily_spent: 37,
    amt: 2500,
  },
  {
    name: 'Page G',
    daily_budget: 50,
    total_daily_spent: 10,
    amt: 2100,
  },
];

const ExpenseHistory = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Toolbar />
      <Grid container direction='column'>
        {/* Spending Chart */}
        <Grid item>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray='3 3' /> */}
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='total_daily_spent'
              stroke='#8884d8'
              activeDot={{r: 8}}
            />
            <Line type='basis' dataKey='daily_budget' stroke='#82ca9d' />
          </LineChart>
        </Grid>
        {/* Spreadsheet with spending */}
        <Grid item></Grid>
      </Grid>
    </main>
  );
};

export default ExpenseHistory;
