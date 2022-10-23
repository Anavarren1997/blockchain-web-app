<template>
  <div class="login_view">
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from "../components/Navigation/Forms/LoginForm.vue";
export default {
  components: { LoginForm },
};
</script>

<style scooped>
.login_view{
  display: grid;
  place-items: center;

}
</style>
