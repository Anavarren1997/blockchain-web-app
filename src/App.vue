<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainNavbar from "./components/Navigation/MainNavbar.vue";
import HomeView from "./views/HomeView.vue";
import SettingsView from "./views/SettingsView.vue";
import LoginView from "./views/SettingsView.vue";
</script>

<template>
  <MainNavbar></MainNavbar>
  <RouterView />
</template>

<style scoped></style>
