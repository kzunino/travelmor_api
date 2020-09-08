import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

//icons
import TodayIcon from '@material-ui/icons/Today';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

// Table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//Charts
import {Bar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1em',
  },
  table: {
    minWidth: 300,
    maxWidth: 700,
  },
  toolbar: {
    padding: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: drawerWidth,
    marginBottom: 50,
    //backgroundColor: '#2F2F31',
    backgroundColor: 'whitesmoke',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      padding: theme.spacing(1, 1.5),
      marginTop: '1em',
    },
  },
  container: {
    padding: 0,
  },
  containerWrapper: {
    margin: 'auto',
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

  // mainContentBox: {
  //   //backgroundColor: theme.palette.secondary.light,
  //   backgroundColor: theme.palette.background.main,
  //   marginTop: '2em',
  //   marginLeft: 0,
  //   marginRight: 0,
  //   paddingTop: '1em',
  //   paddingBottom: '1em',
  //   display: 'flex',
  // },
  //needs height set for responsive container to work
  chartContainer: {
    height: '15em',
    padding: 5,
    [theme.breakpoints.down('xs')]: {
      height: '12em',
    },
  },
  spendingInfoWidget: {
    padding: 10,
  },
  icon: {
    marginLeft: 15,
  },
  spendingWidgetTitle: {
    marginRight: 15,
  },
  divider: {
    marginBottom: '1em',
  },
  mainBoxBudgetItems: {
    padding: '1em',
    textAlign: 'left',
  },

  underBudgetColor: {
    color: '#56a655',
  },
  overBudgetColor: {
    color: '#ce4c52',
  },
  budgetHeading: {
    color: theme.palette.boxContentBudgetHeading.main,
  },
  headingBox: {
    padding: 15,
  },
  budgetBox: {
    padding: 15,
    [theme.breakpoints.down('xs')]: {
      padding: 5,
    },
  },
}));

const Trip = () => {
  const theme = useTheme();
  const classes = useStyles();

  const [barState, setBarState] = useState({
    labels: [
      Moment(Date.now()).subtract(6, 'days').format('ddd'),
      Moment(Date.now()).subtract(5, 'days').format('ddd'),
      Moment(Date.now()).subtract(4, 'days').format('ddd'),
      Moment(Date.now()).subtract(3, 'days').format('ddd'),
      Moment(Date.now()).subtract(2, 'days').format('ddd'),
      Moment(Date.now()).subtract(1, 'days').format('ddd'),
      'Today',
    ],
    datasets: [
      {
        label: '$',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 23, 34, 81, 56, 25, 14],
      },
    ],
  });

  const [pieStateData, setPieStateData] = useState({
    labels: ['hello', 'hi', 'greetings'],
    datasets: [
      {
        data: [200, 400, 2850],
        backgroundColor: ['red', 'blue', 'green'],
      },
    ],
  });

  const matchXs = useMediaQuery(theme.breakpoints.down('xs'));

  //prevents table from exceeding boundaries
  const matchesTable = useMediaQuery('(max-width:648px)');

  //Table Data

  function createData(name, cost, date) {
    return {name, cost, date};
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const data = [
    {
      name: Moment(Date.now()).subtract(6, 'days').format('ddd'),
      // uv: 4000,
      $: 50,
      amt: 50,
    },
    {
      name: Moment(Date.now()).subtract(5, 'days').format('ddd'),
      $: 100,
      amt: 100,
    },
    {
      name: Moment(Date.now()).subtract(4, 'days').format('ddd'),
      $: 300,
      amt: 77,
    },
    {
      name: Moment(Date.now()).subtract(3, 'days').format('ddd'),
      $: 150,
      amt: 150,
    },
    {
      name: Moment(Date.now()).subtract(2, 'days').format('ddd'),
      $: 124,
      amt: 300,
    },
    {
      name: Moment(Date.now()).subtract(1, 'days').format('ddd'),
      $: 86,
      amt: 223,
    },
    {
      name: 'today',
      $: 75,
      amt: 2100,
    },
  ];

  return (
    <>
      <main className={classes.content}>
        <Toolbar />
        <Grid container direction='column' className={classes.containerWrapper}>
          <Container maxWidth={'lg'} className={classes.container}>
            <Grid item>
              <Grid container justify='space-between'>
                {/* Heading Box Item */}
                <Grid item xs={12}>
                  <Box m={1} boxShadow={3} className={classes.headingBox}>
                    <Grid item>
                      <Grid container justify='center'>
                        <Grid item>
                          <Typography variant='h3'>Peru Trip</Typography>
                          <Typography
                            variant='subtitle2'
                            align='center'
                            className={classes.budgetHeading}
                          >
                            Aug 30th - Sept 10th
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container justify='space-around' direction='row'>
                        <Grid item className={classes.mainBoxBudgetItems}>
                          <Typography
                            variant='subtitle2'
                            className={classes.budgetHeading}
                          >
                            trip budget
                          </Typography>
                          <Typography variant='h6'>$1,000.00</Typography>
                        </Grid>
                        <Grid item className={classes.mainBoxBudgetItems}>
                          <Typography
                            variant='subtitle2'
                            className={classes.budgetHeading}
                          >
                            daily budget
                          </Typography>
                          <Typography variant='h6'>$50.00</Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item className={classes.chartContainer}>
                      <Bar
                        data={barState}
                        options={{
                          title: {
                            display: false,
                            fontSize: 20,
                          },
                          legend: {
                            display: false,
                            position: 'right',
                          },
                          maintainAspectRatio: false,
                          scales: {
                            xAxes: [
                              {
                                gridLines: {
                                  display: false,
                                },
                              },
                            ],
                            yAxes: [
                              {
                                gridLines: {
                                  display: false,
                                },
                                ticks: {
                                  display: false,
                                },
                              },
                            ],
                          },
                        }}
                      />
                    </Grid>
                  </Box>
                </Grid>

                {/* Budget Boxes Item */}
                <Grid item xs={12}>
                  <Grid container='row'>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box
                        m={1}
                        boxShadow={3}
                        className={classes.spendingInfoWidget}
                      >
                        <Grid container direction='column'>
                          <Grid item>
                            <Grid container justify='space-between'>
                              <Grid item>
                                <TodayIcon
                                  fontSize='large'
                                  className={classes.icon}
                                />
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant='h5'
                                  className={classes.spendingWidgetTitle}
                                >
                                  {Moment(Date.now()).format('MMM Do')}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Divider className={classes.divider} />
                          <Grid container justify='space-around'>
                            <Grid item>
                              <Typography variant='subtitle2' align='right'>
                                spent today
                              </Typography>
                              <Typography variant='h6' align='right'>
                                $40.00
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant='subtitle2' align='right'>
                                remaining
                              </Typography>
                              <Typography
                                variant='h6'
                                className={classes.underBudgetColor}
                                align='right'
                              >
                                $10.00
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Box
                        m={1}
                        boxShadow={3}
                        className={classes.spendingInfoWidget}
                      >
                        <Grid container direction='column'>
                          <Grid item>
                            <Grid container justify='space-between'>
                              <Grid item>
                                <TimelineIcon
                                  fontSize='large'
                                  className={classes.icon}
                                />
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant='h5'
                                  className={classes.spendingWidgetTitle}
                                >
                                  Daily
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Divider className={classes.divider} />
                          <Grid container justify='space-around'>
                            <Grid item>
                              <Typography variant='subtitle2' align='right'>
                                daily avg.
                              </Typography>
                              <Typography variant='h6' align='right'>
                                $43.50
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant='subtitle2' align='right'>
                                new daily budget.
                              </Typography>
                              <Typography variant='h6' align='right'>
                                $54.00
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>

                    {/* Total Widget */}
                    <Grid item xs={12} sm={4} md={4}>
                      <Box
                        m={1}
                        boxShadow={3}
                        className={classes.spendingInfoWidget}
                      >
                        <Grid container direction='column'>
                          <Grid item>
                            <Grid container justify='space-between'>
                              <Grid item>
                                <AccountBalanceIcon
                                  fontSize='large'
                                  className={classes.icon}
                                />
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant='h5'
                                  className={classes.spendingWidgetTitle}
                                >
                                  Total
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Divider className={classes.divider} />
                          <Grid container justify='space-around'>
                            <Grid item>
                              <Typography variant='subtitle2' align='right'>
                                total spent
                              </Typography>
                              <Typography variant='h6' align='right'>
                                $352.50
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant='subtitle2' align='right'>
                                remaining
                              </Typography>
                              <Typography
                                variant='h6'
                                className={classes.underBudgetColor}
                                align='right'
                              >
                                $647.50
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Pie Chart */}
                <Grid item xs>
                  <Grid container justify='space-between'>
                    {/* Last Five Purchases Table */}
                    <Grid xs={12} sm={6} item>
                      <Box m={1} boxShadow={3} className={classes.budgetBox}>
                        <Typography variant='h4' align='center'>
                          Last five purchases
                        </Typography>
                        <Grid
                          container
                          direction='row'
                          justify='center'
                          alignItems='center'
                        >
                          <Grid item>
                            <TableContainer component={Paper}>
                              <Table
                                className={classes.table}
                                size='small'
                                aria-label='a dense table'
                              >
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Expense</TableCell>
                                    <TableCell align='right'>Cost</TableCell>
                                    <TableCell align='right'>Date</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rows.map((row) => (
                                    <TableRow key={row.name}>
                                      <TableCell component='th' scope='row'>
                                        {row.name}
                                      </TableCell>
                                      <TableCell align='right'>
                                        {row.cost}
                                      </TableCell>
                                      <TableCell align='right'>
                                        {row.date}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                            <Grid xs={12} item align='center'>
                              <Button
                                className={classes.button}
                                disableRipple
                                variant='outlined'
                                component={Link}
                                to='/history'
                              >
                                Go to budget
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>

                    {/* ------ Pie Chart --------- */}
                    <Grid xs={12} sm={5} item>
                      <Box m={1} boxShadow={3} className={classes.budgetBox}>
                        <Pie data={pieStateData} />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </main>
    </>
  );
};

export default Trip;
