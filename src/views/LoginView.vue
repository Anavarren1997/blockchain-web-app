<template>
  <div class="login_view">
    <LoginForm></LoginForm>
  </div>
</template>

<script setup>
import LoginForm from "../components/Forms/LoginForm.vue";
</script>

<style scooped>
.login_view {
  display: grid;
  place-items: center;
}
</style>
