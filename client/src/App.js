import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AuthHeader from './components/HeaderAuth';
//import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      <AuthHeader />
      <Switch>
        <Route></Route>
      </Switch>
    </>
  );
}

export default App;
