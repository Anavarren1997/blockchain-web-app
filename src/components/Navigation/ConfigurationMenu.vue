<template>
  <nav>
    <div class="menu-item">
      <router-link to="/">Token Cnfiguration</router-link>
    </div>
    <div class="menu-item">
      <router-link to="/settings">Settings</router-link>
    </div>
  </nav>
</template>

<script></script>

<style scoped>
nav {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-menu {
  display: flex;
  column-gap: 1rem;
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
  color: green;
}
</style>
