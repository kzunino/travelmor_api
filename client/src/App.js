import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthHeader from './components/HeaderAuth';
import Dashboard from './components/Dashboard';
import BottomActions from './components/BottomActions';

function App() {
  return (
    <>
      <Router>
        <AuthHeader />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />

          <Route path='/dashboard' component={Dashboard} />

          <Route
            path='/dashboard/trip/:trip_uid'
            component={() => <div>trips</div>}
          />
          <Route
            path='/dashboard/history/:trip_uid'
            component={() => <div>history</div>}
          />
        </Switch>
        <BottomActions />
      </Router>
    </>
  );
}

export default App;
