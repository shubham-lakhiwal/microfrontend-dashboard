import React, {Suspense, lazy} from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth'
})


const SigninPage = lazy(() => import('./components/Signin'));
const SignupPage = lazy(() => import('./components/Signup'));

export default function App({history}) {
  return <div className="auth">
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/auth/signin" component={SigninPage} />
            <Route path="/auth/signup" component={SignupPage} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  </div>
}