<template>
  <v-container>
    <base-tree :root="author(id)" />
    <base-tree :root="works(id)" />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Author',
  props: ['id'],
  async created() {
    await this.fetchAuthor(this.id)
    await this.fetchWorks(this.id)
  },
  computed: {
    ...mapGetters({
      author: 'authors/getAuthorById',
      works: 'works/getWorksByAuthor'
    })
  },
  methods: {
    ...mapActions({
      fetchAuthor: 'authors/fetchAuthor',
      fetchWorks: 'works/fetchWorksByAuthor'
    })
  }
}
</script>

<style></style>
