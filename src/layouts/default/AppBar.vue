<template>
  <v-app-bar id="default-app-bar" app>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="toggleDrawer" />
  </v-app-bar>
</template>

<script>
export default {
  name: 'DefaultBar',
  methods: {
    toggleDrawer() {
      this.$store.commit('app/toggleDrawer')
    }
  }
}
</script>
