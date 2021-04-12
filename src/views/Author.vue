<template>
  <base-tree :root="author(id)" />
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'Author',
  props: ['id'],
  async created() {
    await this.fetchAuthor(this.id)
  },
  computed: {
    ...mapState('authors', ['authors']),
    ...mapGetters({ author: 'authors/getAuthorById' })
  },
  methods: {
    ...mapActions({ fetchAuthor: 'authors/fetchAuthor' })
  }
}
</script>

<style></style>
