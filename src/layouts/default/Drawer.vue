<template>
  <v-navigation-drawer id="default-drawer" app>
    <v-list>
      <v-list-item to="/">Home</v-list-item>
      <v-list-item to="/about">About</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DefaultDrawer',
};
</script>
