import React, {Suspense, lazy} from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import './styles.css'

const LandingPage = lazy(() => import('./components/Landing'));
const PricingPage = lazy(() => import('./components/Pricing'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'mark'
})

export default function App({history}) {
  return <div className="mkt">
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/pricing" component={PricingPage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  </div>
}