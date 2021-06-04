<template>
  <v-container>
    <v-data-table :headers="headers" :items="authors" :loading="loading">
      <template v-slot:item.id="{ item }">
        <router-link :to="'/authors/' + item.id"> View </router-link>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AuthorsList',
  async created() {
    await this.fetchAuthors()
    this.loading = false
  },
  data: () => {
    return {
      loading: true,
      headers: [
        { text: 'Last name', value: 'lastName' },
        { text: 'First name', value: 'firstName' },
        { text: '', value: 'id' }
      ]
    }
  },
  computed: {
    ...mapState('authors', ['authors'])
  },
  methods: {
    ...mapActions({ fetchAuthors: 'authors/fetchAuthors' })
  }
}
</script>

<style scoped></style>
