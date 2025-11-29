import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import './styles.css'

import LandingPage from "./components/Landing";
import PricingPage from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: 'mark'
})

export default function App({history}) {
  return <div className="mkt">
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing" component={PricingPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </StylesProvider>
  </div>
}