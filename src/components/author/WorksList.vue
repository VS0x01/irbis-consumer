<template>
  <v-data-table :headers="headers" :items="works" :loading="loading">
    <template v-slot:item.id="{ item }">
      <router-link :to="'/works/' + item.id"> View </router-link>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'WorksList',
  props: ['works', 'loading'],
  data: () => {
    return {
      headers: [
        { text: 'Author', value: 'authorName' },
        { text: 'Title', value: 'title' },
        { text: '', value: 'id' }
      ]
    }
  }
}
</script>

<style></style>
