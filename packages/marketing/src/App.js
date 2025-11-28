import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import LandingPage from "./components/Landing";
import PricingPage from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: 'mark'
})

export default function App() {
  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={PricingPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  </div>
}