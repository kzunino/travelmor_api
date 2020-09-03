import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

// Table Imports
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
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
  containerWrapper: {
    margin: 'auto',
  },
  //table styles
  table: {},
  tableWrapper: {
    marginTop: '2em',
    padding: 0,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(expense_name, expense_cost, expense_type, expense_date) {
  return {expense_name, expense_cost, expense_type, expense_date};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

const ExpenseHistory = () => {
  const theme = useTheme();
  const classes = useStyles();

  const matchXs = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <main className={classes.content}>
      <Toolbar />
      <Grid direction='column' className={classes.containerWrapper}>
        {/* -----Welcome Container----- */}
        <Grid item>
          <Typography variant={matchXs ? 'h4' : 'h2'}>
            Peru Trip Expense History
          </Typography>
        </Grid>
        <Divider />
        <Container
          component='div'
          maxWidth='sm'
          className={classes.tableWrapper}
        >
          <Grid container direction='column'>
            <Grid item>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label='customized table'>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Expense</StyledTableCell>
                      <StyledTableCell align='right'>Cost</StyledTableCell>
                      <StyledTableCell align='right'>Type</StyledTableCell>
                      <StyledTableCell align='right'>Date</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.expense}>
                        <StyledTableCell component='th' scope='row'>
                          {row.expense_name}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          {row.expense_cost}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          {row.expense_type}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          {row.expense_date}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            {/* Spreadsheet with spending */}
            <Grid item></Grid>
          </Grid>
        </Container>
      </Grid>
    </main>
  );
};

export default ExpenseHistory;
