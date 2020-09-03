import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Table Imports

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

const ExpenseHistory = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Toolbar />
      <Grid container direction='column'>
        {/* Spending Chart */}
        <Grid item></Grid>
        {/* Spreadsheet with spending */}
        <Grid item></Grid>
      </Grid>
    </main>
  );
};

export default ExpenseHistory;
