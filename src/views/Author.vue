<template>
  <p>{{ authors.find((author) => author.id == id) }}</p>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Author',
  props: ['id'],
  async created() {
    await this.fetchAuthor(this.id)
  },
  computed: {
    ...mapState('authors', ['authors'])
  },
  methods: {
    ...mapActions({ fetchAuthor: 'authors/fetchAuthor' })
  }
}
</script>

<style></style>
