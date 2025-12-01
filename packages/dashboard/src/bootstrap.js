import {createApp} from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (el, { onSignIn, onNavigate, defaultHistory, path } = {}) => {
  const app = createApp(Dashboard, {})
  app.mount(el)
}

if(process.env.NODE_ENV === 'development') {
  const elem = document.querySelector('#_dashboard-dev-root');
  if(elem) {
    mount(elem)
  }
}

export { mount }