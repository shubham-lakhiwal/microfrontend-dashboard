import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Header from "./components/Header";

const AuthApp = lazy(() =>  import("./components/AuthApp"));
const MarketingApp = lazy(() =>  import("./components/MarketingApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: 'cont'
})
export default function App() {
  const [signedIn, setSignedIn] = React.useState(false);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header isSignedIn={signedIn} onSignOut={() => setSignedIn(false)} />
        <Suspense fallback={<div>loading....</div>} >
          <Switch>
            <Route path="/auth" >
              <AuthApp onSignIn={() => setSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  )
}