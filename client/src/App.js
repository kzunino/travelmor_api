import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LandingPageContent from './components/LandingPageContent';
import Login from './components/Login';
//import AuthHeader from './components/HeaderAuth';

function App() {
  return (
    <>
      <Router>
        <LandingPage />
        {/* <AuthHeader/> */}
        <Switch>
          <Route exact path='/' component={LandingPageContent} />
          <Route path='/login' component={Login} />
          <Route path='/trip/:id' component={() => <div>trips</div>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
