<template>
  <v-container>
    <ul>
      <li v-for="author in authors.authors" :key="author.id">
        {{ author.lastName + ' ' + author.firstName }}
      </li>
    </ul>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',

  created() {
    this.fetchAuthors()
  },
  computed: {
    ...mapState(['authors'])
  },
  methods: {
    ...mapActions({ fetchAuthors: 'authors/fetchAuthors' })
  }
}
</script>
