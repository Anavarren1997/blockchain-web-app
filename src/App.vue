<script setup>
import { RouterLink, RouterView } from "vue-router";
import InfoHeader from "./components/InfoHeader.vue";
import MainNavbar from "./components/Navigation/MainNavbar.vue";
import HomeView from "./views/HomeView.vue";
import SettingsView from "./views/SettingsView.vue";
import LoginView from "./views/SettingsView.vue";
</script>

<template>
  <InfoHeader></InfoHeader>
  <MainNavbar></MainNavbar>
  <RouterView />
</template>

<style scoped></style>
