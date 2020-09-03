import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthHeader from './components/HeaderAuth';
import Dashboard from './components/Dashboard';
import History from './components/History';
import ExpenseHistory from './components/ExpenseHistory';
import Trip from './components/Trip';
import NewTrip from './components/NewTrip';
import About from './components/About';
import Contact from './components/ContactUs';
import MyAccount from './components/MyAccount';

import BottomActions from './components/BottomActions';

function App() {
  return (
    <>
      <Router>
        <AuthHeader />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />

          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/trip' component={Trip} />
          <Route exact path='/dashboard/history' component={ExpenseHistory} />
          <Route exact path='/history' component={History} />
          <Route exact path='/newtrip' component={NewTrip} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/account' component={MyAccount} />
        </Switch>
        <BottomActions />
      </Router>
    </>
  );
}

export default App;
