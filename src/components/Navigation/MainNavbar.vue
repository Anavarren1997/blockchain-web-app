<template>
  <nav>
    <div class="left-menu">
      <div class="menu-item">
        <router-link to="/">w3 Calls</router-link>
      </div>
      <div v-show="authStore.user !== null" class="menu-item">
        <router-link to="/api">API Calls</router-link>
      </div>
      <div v-show="authStore.user !== null" class="menu-item">
        <router-link to="/settings">Settings</router-link>
      </div>
    </div>
    <div class="right-menu">
      <div v-show="authStore.user === null" class="menu-item">
        <router-link to="/login">Log In</router-link>
      </div>
      <div v-show="authStore.user !== null" class="menu-item">
        <a @click="authStore.logout()" style="cursor: pointer">Logout</a>
      </div>
      <div v-show="authStore.user === null" class="menu-item">
        <a @click="authStore.logout()" style="cursor: pointer">Sign Up</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from "../../stores/auth.store";

export default {
  data() {
    return {
      authStore: useAuthStore(),
    };
  },
};
</script>

<style scoped>
nav {
  height: 3rem;
  padding: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.left-menu,
.right-menu {
  display: flex;
  column-gap: 1.5rem;
}

.menu-item {
  display: flex;
  align-items: flex-end;
}

a {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

a:hover {
  color: #9955af;
}
</style>
