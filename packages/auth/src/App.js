import React, {Suspense, lazy} from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth'
})


const SigninPage = lazy(() => import('./components/Signin'));
const SignupPage = lazy(() => import('./components/Signup'));

export default function App({history, onSignIn}) {
  return <div className="auth">
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/auth/signin">
              <SigninPage onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <SignupPage onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  </div>
}