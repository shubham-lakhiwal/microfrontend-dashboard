import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onNavigate, defaultHistory, path } = {}) => {
  const history = defaultHistory || createMemoryHistory()
  onNavigate && history.listen(onNavigate)
  path && history.push(path)
  ReactDOM.render(
    <App history={history} />,
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
  const elem = document.querySelector('#_marketing-dev-root');
  if(elem) {
    mount(elem, {
      defaultHistory: createBrowserHistory(),
    })
  }
}

export { mount }