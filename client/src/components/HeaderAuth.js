import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InfoIcon from '@material-ui/icons/Info';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FlightIcon from '@material-ui/icons/Flight';

import logo from '../imgs/travelmor_square.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1em',
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbar: {
    padding: 0,
  },
  logoContainer: {
    padding: 0,
  },
  logo: {
    width: drawerWidth,
    height: '5.5em',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.secondary.main,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  drawerIconContainer: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    marginLeft: 'auto',
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: ' 50px',
    width: '50px',
  },
  list: {
    [theme.breakpoints.up('sm')]: {
      padding: 0,
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const AuthHeader = ({match}) => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  //Component State Management
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [tripValue, setTripValue] = useState(null);
  const [openCollapse, setOpenCollapse] = React.useState(false);

  const handleClick = () => {
    setOpenCollapse(!openCollapse);
  };

  //Drawer List - active indexes on dividers too
  const drawerItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      link: '/dashboard',
      activeIndex: 0,
    },
    {
      text: 'My Trips',
      icon: <CardTravelIcon />,
      activeIndex: 1,
    },
    {
      text: 'New Trip',
      icon: <FlightTakeoffIcon />,
      link: '/newtrip',
      activeIndex: 2,
    },
    {
      text: 'Divider',
      divider: <DashboardIcon />,
    },
    {
      text: 'About Us',
      icon: <InfoIcon />,
      link: '/about',
      activeIndex: 4,
    },
    {
      text: 'Contact Us',
      icon: <RecentActorsIcon />,
      link: '/contact',
      activeIndex: 5,
    },
    {
      text: 'Divider',
      divider: <DashboardIcon />,
    },
    {
      text: 'My Account',
      icon: <AccountBoxIcon />,
      link: '/account',
      activeIndex: 7,
    },
    {
      text: 'Logout',
      icon: <ExitToAppIcon />,
      link: '/logout',
      activeIndex: 8,
    },
  ];

  const trips = [
    {name: 'Trip One', link: '/trip', id: 12344, activeIndex: 0},
    {name: 'Trip Two', link: '/trip', id: 22343434, activeIndex: 0},
    {name: 'Trip Three', link: '/trip', id: 123234334, activeIndex: 0},
    {name: 'Trip Four', link: '/trip', id: 1234334, activeIndex: 0},
  ];

  //Routes
  // const routes = [
  //   {name: 'dashboard', link: '/dashboard', activeIndex: 0},
  //   {name: 'new trip', link: '/newtrip', activeIndex: 2},
  //   {name: 'about us', link: '/about', activeIndex: 4},
  //   {name: 'contact us', link: '/contact', activeIndex: 5},
  //   {name: 'my account', link: '/myaccount', activeIndex: 7},
  //   {name: 'logout', link: '/logout', activeIndex: 8},
  // ];

  useEffect(() => {
    // checks window URL, and renders the selected prop to the correct
    // dashboard item in order to highlight the navigation link
    [...drawerItems, ...trips].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
          }
          break;
        case `${route.link}/${route.id}`:
          if (tripValue !== route.activeIndex) {
            console.log('Iwork');
            setTripValue(tripValue);
            setValue(null);
          }
          break;
        default:
          break;
      }
    });
  }, [drawerItems, trips, tripValue, value]);

  //renders drawer component depending on media breakpoint
  const drawer = (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar className={classes.toolbarMargin} />
      <div className={classes.drawerContainer}>
        <List className={classes.list}>
          {drawerItems.map((item, index) => {
            if (item.divider) {
              return <Divider key={`${item}, ${index}`} />;
            } else if (item.text === 'My Trips') {
              return (
                <>
                  <ListItem
                    button
                    key={`${item}, ${index}`}
                    onClick={handleClick}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                    {openCollapse ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse
                    in={openCollapse}
                    timeout='auto'
                    unmountOnExit
                    key={`${item.text}, ${index + 1}`}
                  >
                    <List disablePadding>
                      {trips.map((trip, index) => {
                        return (
                          <ListItem
                            button
                            className={classes.nested}
                            key={`${trip.id}${index}`}
                            component={Link}
                            to={`/trip/${trip.id}`}
                            onClick={() => {
                              setValue(0);
                              setTripValue(trip.id);
                            }}
                            selected={tripValue === trip.id}
                          >
                            <ListItemIcon>
                              <FlightIcon />
                            </ListItemIcon>
                            <ListItemText primary={trip.name} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              );
            } else {
              return (
                <ListItem
                  button
                  key={`${item.text}, ${index}`}
                  component={Link}
                  to={item.link}
                  selected={value === item.activeIndex}
                  onClick={() => {
                    setTripValue(null);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              );
            }
          })}
        </List>
      </div>
    </Drawer>
  );
  //renders Temporary drawer on smaller screens
  const tempDrawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        {drawer}
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar} color='secondary'>
        <Toolbar className={classes.toolbar}>
          <Button
            component={Link}
            to='/'
            className={classes.logoContainer}
            disableRipple
          >
            <img src={logo} alt='Travelmor.logo' className={classes.logo} />
          </Button>
          <Typography variant='h6' noWrap></Typography>
          {matches ? null : tempDrawer}
        </Toolbar>
      </AppBar>
      {/* media query to render clipped drawer */}
      {matches ? drawer : null}
      <main className={classes.content}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
};

export default AuthHeader;
