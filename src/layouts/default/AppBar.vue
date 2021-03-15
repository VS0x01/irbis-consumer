<template>
  <v-app-bar id="default-app-bar" app>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="toggleDrawer" />
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'DefaultBar',
  methods: {
    ...mapMutations({ toggleDrawer: 'app/toggleDrawer' })
  }
}
</script>
