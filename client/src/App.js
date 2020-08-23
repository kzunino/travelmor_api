import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AuthHeader from './components/HeaderAuth';
//import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      <Route component={AuthHeader} />
      <Switch>
        <Route exact to='/trip/:id' component={() => <div>trips</div>} />
      </Switch>
    </>
  );
}

export default App;
