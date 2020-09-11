import React, {useState} from 'react';
// import Moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Button from '@material-ui/core/Button';

//Select

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//Date
import {KeyboardDatePicker} from '@material-ui/pickers';

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
  container: {
    width: '50%',
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

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  budgetField: {
    width: '50%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    verticalAlign: 'bottom',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'white',
    fontWeight: 'bold',
    width: '50%',
  },
}));

const NewTrip = () => {
  const theme = useTheme();
  const classes = useStyles();

  const [currency, setCurrency] = React.useState('');
  const [selectedStartDate, setSelectedStartDate] = useState(Date.now());
  const [selectedEndDate, setSelectedEndDate] = useState(Date.now());

  // Currency data
  const handleCurrencyType = (currency) => {
    setCurrency(currency);
  };

  //start date state
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  //end date state
  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  const matchXs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <main className={classes.content}>
        <Toolbar />
        <Grid direction='column'>
          {/* -----Welcome Container----- */}
          <Grid item>
            <Typography variant={matchXs ? 'h4' : 'h2'}>New Trip</Typography>
          </Grid>
          <Divider />
          <Container component='div' maxWidth='xs'>
            <CssBaseline />

            <form className={classes.form} noValidate>
              <TextField
                variant='standard'
                margin='normal'
                required
                fullWidth
                id='trip_name'
                label='Trip Name'
                name='trip_name'
                autoFocus
              />
              <TextField
                className={classes.budgetField}
                variant='standard'
                margin='normal'
                required
                fullWidth
                name='trip_budget_total'
                label='Budget Total'
                type='number'
                placeholder='0.00'
                InputProps={{inputProps: {min: 0}}}
                id='trip_budget_total'
              />

              {/* ------ Currency Input ----- */}
              <FormControl required className={classes.formControl}>
                <InputLabel id='required-label'>Currency</InputLabel>
                <Select
                  labelId='demo-simple-select-required-label'
                  id='demo-simple-select-required'
                  value={currency}
                  onChange={handleCurrencyType}
                  className={classes.selectEmpty}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'USD'}>USD</MenuItem>
                  <MenuItem value={'COP'}>COP</MenuItem>
                </Select>
              </FormControl>

              <Grid
                container
                direction='row'
                spacing={2}
                justify='space-between'
              >
                <Grid xs={6} item>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/DD/yyyy'
                    margin='normal'
                    id='date-picker-inline'
                    label='Start Date'
                    value={selectedStartDate}
                    onChange={handleStartDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>

                <Grid xs={6} item>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/DD/yyyy'
                    margin='normal'
                    id='date-picker-inline'
                    label='End Date'
                    value={selectedEndDate}
                    onChange={handleEndDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
              </Grid>

              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.submit}
                disableRipple
              >
                Create Trip
              </Button>
              <Grid container></Grid>
            </form>
          </Container>
        </Grid>
      </main>
    </>
  );
};

export default NewTrip;
