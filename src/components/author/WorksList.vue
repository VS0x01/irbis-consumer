<template>
  <v-data-table
    :headers="headers"
    :items="works"
    :loading="loading"
    show-expand
    single-expand
  >
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">{{ item }}</td>
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
        { text: '', value: 'data-table-expand' }
      ]
    }
  }
}
</script>

<style></style>
