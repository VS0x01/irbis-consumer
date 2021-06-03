<template>
  <v-container>
    <base-tree v-for="work in works" :key="work.id" :root="work" />
  </v-container>
</template>

<script>
export default {
  name: 'WorksList',
  props: ['works']
}
</script>

<style></style>
