import React from 'react';
import {data as countryData} from 'currency-codes';
import {Link} from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//Select

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' to='https://www.travelmor.com'>
        Travelmor.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
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
  selectEmpty: {
    width: '10em',
  },
  selectMenu: {
    maxHeight: '15em',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'white',
    fontWeight: 'bold',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState('');

  // Currency data
  const handleCurrencyType = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='first_name'
            label='First Name'
            name='first_name'
            autoComplete='first_name'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='last_name'
            label='Last Name'
            name='last_name'
            autoComplete='last_name'
          />
          <FormControl required className={classes.formControl}>
            <InputLabel id='required-label'>Home Currency</InputLabel>
            <Select
              id='currency'
              value={currency}
              onChange={handleCurrencyType}
              className={classes.selectEmpty}
              // accesses the menu styles
              MenuProps={{classes: {list: classes.selectMenu}}}
            >
              <MenuItem value={'840'}>USD</MenuItem>
              <MenuItem value={'978'}>EUR</MenuItem>
              <MenuItem value={'036'}>AUD</MenuItem>
              <Divider />
              {countryData.map((country) => (
                <MenuItem
                  value={`${country.number}`}
                >{`${country.code}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Confirm Password'
            type='password'
            id='confirm_password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disableRipple
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/signin' variant='body2'>
                {'Already have an account? Sign In'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
