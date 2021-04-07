<template>
  <v-navigation-drawer id="default-drawer" app v-model="drawer">
    <v-list>
      <v-list-item to="/authors">Authors</v-list-item>
      <v-list-item to="/about">About</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DefaultDrawer',

  computed: {
    drawer: {
      get() {
        return this.$store.state.app.drawer
      },
      set(v) {
        this.$store.commit('app/toggleDrawer', v)
      }
    }
  }
}
</script>
