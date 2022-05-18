import { createApp } from 'vue'

import { createAuth0 } from '@auth0/auth0-vue';

import App from './App.vue'

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-q6ylt640.us.auth0.com",
    client_id: "J6jnlP8RpvkJhTCkmiL48v5EeFIhVvqv",
    redirect_uri: window.location.origin
  })
);

app.mount('#app');
