import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onSignIn, onNavigate, defaultHistory, path } = {}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [path]
  })
  onNavigate && history.listen(onNavigate)
  ReactDOM.render(
    <App onSignIn={onSignIn} history={history} />,
    el
  )

  return {
    onParentNavigate: ({pathname: nextPathName}) => {
      const {location: { pathname }} = history
      if(nextPathName !== pathname) {
        history.push(nextPathName)
      }
    }
  }
}

if(process.env.NODE_ENV === 'development') {
  const elem = document.querySelector('#_auth-dev-root');
  if(elem) {
    mount(elem, {
      defaultHistory: createBrowserHistory(),
    })
  }
}

export { mount }