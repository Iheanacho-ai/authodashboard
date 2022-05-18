<template>
  <div>
    <h2>User Profile</h2>
    <button @click="logout">Log out</button>
    <button @click="login">Log in</button>
    <pre v-if="isAuthenticated">
      <code>{{ user }}</code>
    </pre>
  </div>
</template>
<script>
  import { useAuth0 } from '@auth0/auth0-vue';
  import {sdk} from '../init';

  export default {
    setup() {
      const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
      return {
        login: () => {
          loginWithRedirect();
          this.handleUserStorage()
        },
        user,
        isAuthenticated,
        logout: () => {
          logout({ returnTo: window.location.origin });
        }
      }
    },
    watch: {
      user: async function(){
        const {nickname, name, email, picture } = this.user
        if (this.isAuthenticated) {
          alert('user saved')
          try {
            await sdk.database.createDocument('6284b56a769a6ac2a925', 'unique()', {
              "nickname": nickname,
              "name": name,
              "email": email,
              "picture": picture
            })
          } catch (error) {
            console.log(error)
          }
          
        } else {
          return
        }
      }
    }
  };
</script>

