<template>
  <v-app-bar id="default-app-bar" app>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="toggleDrawer" />
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'DefaultBar',
  computed: {
    ...mapState('app', ['breadcrumbs'])
  },
  methods: {
    ...mapMutations({ toggleDrawer: 'app/toggleDrawer' })
  }
}
</script>
