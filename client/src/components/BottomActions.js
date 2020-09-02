import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ListIcon from '@material-ui/icons/List';
import EditIcon from '@material-ui/icons/Edit';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    },
    marginLeft: drawerWidth,
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },

  navActionButtons: {
    '& > :first-child': {
      marginRight: drawerWidth,
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      '& > :first-child': {
        marginRight: 0,
      },
    },
  },
}));

const BottomActions = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        classes={{wrapper: classes.wrapper, root: classes.navActionButtons}}
        label='Expenses'
        icon={<ListIcon />}
        disableRipple
      />
      <BottomNavigationAction
        classes={{wrapper: classes.wrapper, root: classes.navActionButtons}}
        label='Add'
        icon={<AddCircleIcon />}
        disableRipple
      />

      <BottomNavigationAction
        classes={{wrapper: classes.wrapper, root: classes.navActionButtons}}
        label='Edit'
        icon={<EditIcon />}
        disableRipple
      />
    </BottomNavigation>
  );
};

export default BottomActions;
