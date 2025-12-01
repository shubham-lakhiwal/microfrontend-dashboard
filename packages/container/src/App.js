import React, {lazy, Suspense, useEffect} from 'react';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Header from "./components/Header";
import {createBrowserHistory} from 'history';

const AuthApp = lazy(() =>  import("./components/AuthApp"));
const MarketingApp = lazy(() =>  import("./components/MarketingApp"));
const DashboardApp = lazy(() =>  import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: 'cont'
})

const history = createBrowserHistory();

export default function App() {
  const [signedIn, setSignedIn] = React.useState(false);

  useEffect(() => {
    if(signedIn) {
      history.push("/dashboard");
    }
  },[signedIn])
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Header isSignedIn={signedIn} onSignOut={() => setSignedIn(false)} />
        <Suspense fallback={<div>loading....</div>} >
          <Switch>
            <Route path="/auth" >
              <AuthApp onSignIn={() => setSignedIn(true)} />
            </Route>
            <Route path="/dashboard" >
              {!signedIn  && <Redirect to="/" />}
              <DashboardApp />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  )
}