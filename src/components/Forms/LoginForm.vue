<template>
  <div class="login_form">
    <div class="credentials_container">
      <div class="input_container">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username..."
          v-model="username"
        />
      </div>

      <div class="input_container">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password..."
          v-model="password"
        />
      </div>
    </div>

    <div class="buttons_container">
      <button @click="onSubmitLogin">Login</button>
      <button>Cancel</button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../../stores/auth.store";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmitLogin() {
      const authStore = useAuthStore();
      return authStore
        .login(this.username, this.password)
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scooped>
.login_form {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}

.credentials_container {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}

.input_container {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}

.buttons_container {
  display: flex;
  justify-content: center;
  column-gap: 1rem;
}
</style>
