import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

// Table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//Charts

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from 'recharts';

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
  //needs height set for responsive container to work
  chartContainer: {
    height: '33.7em',
    [theme.breakpoints.down('xs')]: {
      height: '12em',
    },
  },
  overallSpendingItems: {
    padding: '1em',
    textAlign: 'left',
  },
  dailySpendingItems: {
    padding: '1em',
    textAlign: 'left',
  },
  averageSpendingItems: {
    // marginRight: 'auto',
    padding: '1em',
    textAlign: 'left',
  },
  underBudgetColor: {
    color: '#56a655',
  },
  overBudgetColor: {
    color: '#ce4c52',
  },
  box: {
    backgroundColor: '#4a4a4a',
  },
  budgetData: {
    color: theme.palette.boxContentBudgetData.main,
  },
  budgetHeading: {
    color: theme.palette.boxContentBudgetHeading.main,
  },
  headingBox: {
    // width: '100%',
    padding: 15,
  },
  barChartBox: {
    // width: '100%',
  },
  budgetBox: {
    // width: '100%',
    padding: 15,
    [theme.breakpoints.down('xs')]: {
      padding: 5,
    },
  },
  barFill: {
    color: `linear-gradient( ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
  },
}));

const Trip = () => {
  const theme = useTheme();
  const classes = useStyles();

  const barFill = `linear-gradient( ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`;

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

  //if type is null then uncategorized
  const expenses = [
    {
      expense_uid: 132323,
      type: 'Transportation',
      name: 'bus tickets',
      cost: 12.0,
      date: Date.now(),
    },
    {
      expense_uid: 1323222,
      type: 'Food',
      name: 'breakfast',
      cost: 42.0,
      date: Date.now(),
    },
    {
      expense_uid: 1359693,
      type: 'Tour',
      name: 'Cusco City Tour',
      cost: 50.0,
      date: Date.now(),
    },
    {
      expense_uid: 190323,
      type: 'Gifts',
      name: 'Bottle of Pisco',
      cost: 18.0,
      date: Date.now(),
    },
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

  // Pie Charts
  const pieData = [
    {name: 'Food', value: 400},
    {name: 'Transportation', value: 300},
    {name: 'Lodging', value: 300},
    {name: 'Tours', value: 200},
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {/* {data[index].name} */}
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <main className={classes.content}>
        <Toolbar />
        <Grid container direction='column' className={classes.containerWrapper}>
          <Container maxWidth={'lg'}>
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
                        <Grid item className={classes.overallSpendingItems}>
                          <Typography
                            variant='subtitle2'
                            className={classes.budgetHeading}
                          >
                            trip budget
                          </Typography>
                          <Typography variant='h6'>$1,000.00</Typography>
                        </Grid>
                        <Grid item className={classes.overallSpendingItems}>
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
                  </Box>
                </Grid>

                {/* Bar chart Item */}
                <Grid item xs={12} sm={7}>
                  <Box m={1} boxShadow={3} className={classes.barChartBox}>
                    <Grid container className={classes.chartContainer}>
                      <ResponsiveContainer
                        width='99%'
                        // height={matchXs ? '50%' : undefined}
                      >
                        <BarChart
                          // width={matchXs ? 350 : 500}
                          // height={matchXs ? 250 : 400}
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
                          <Bar dataKey='$' fill={'#ff0000'}>
                            {data.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                stroke={'black'}
                                fill={'red'}
                                strokeWidth={2}
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </Grid>
                  </Box>
                </Grid>

                {/* Budget Boxes Item */}

                <Grid xs={12} sm={4} item>
                  <Box m={1} boxShadow={3} className={classes.budgetBox}>
                    <Box m={1} boxShadow={3} className={classes.box}>
                      <Grid container direction='column'>
                        <Grid item className={classes.spendingInfoWidget}>
                          <Typography
                            variant='h6'
                            align='center'
                            className={classes.budgetData}
                          >
                            {Moment(Date.now()).format('MMM Do, YYYY')}
                          </Typography>
                        </Grid>
                        <Grid container justify='space-around'>
                          <Grid item className={classes.dailySpendingItems}>
                            <Typography variant='subtitle2'>
                              spent today
                            </Typography>
                            <Typography
                              variant='h6'
                              className={classes.budgetData}
                            >
                              $40.00
                            </Typography>
                          </Grid>
                          <Grid item className={classes.dailySpendingItems}>
                            <Typography variant='subtitle2'>
                              remaining
                            </Typography>
                            <Typography
                              variant='h6'
                              className={classes.underBudgetColor}
                            >
                              $10.00
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box m={1} boxShadow={3} className={classes.box}>
                      <Grid container justify='space-around' direction='row'>
                        <Grid item className={classes.averageSpendingItems}>
                          <Typography variant='subtitle2'>
                            total daily average
                          </Typography>
                          <Typography
                            variant='h6'
                            align='center'
                            className={classes.budgetData}
                          >
                            $43.50
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box m={1} boxShadow={3} className={classes.box}>
                      <Grid container justify='space-around' direction='row'>
                        <Grid item className={classes.averageSpendingItems}>
                          <Typography variant='subtitle2'>
                            daily budget to stay on target
                          </Typography>
                          <Typography
                            variant='h6'
                            align='center'
                            className={classes.budgetData}
                          >
                            $54.00
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box m={1} boxShadow={3} className={classes.box}>
                      <Grid container justify='space-around' direction='row'>
                        <Grid item className={classes.averageSpendingItems}>
                          <Typography variant='subtitle2'>
                            total spent
                          </Typography>
                          <Typography
                            variant='h6'
                            align='center'
                            className={classes.budgetData}
                          >
                            $366.00
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box m={1} boxShadow={3} className={classes.box}>
                      <Grid container justify='space-around' direction='row'>
                        <Grid item className={classes.averageSpendingItems}>
                          <Typography variant='subtitle2'>
                            budget remaining
                          </Typography>
                          <Typography
                            variant='h6'
                            align='center'
                            className={classes.budgetData}
                          >
                            $645.00
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
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
                        <PieChart width={300} height={300}>
                          <Pie
                            data={pieData}
                            cx={150}
                            cy={150}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey='value'
                          >
                            {data.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                        </PieChart>
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
