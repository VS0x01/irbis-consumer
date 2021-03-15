<template>
  <v-container>
    <ol>
      <li v-for="author in authors.authors" :key="author.mfn">
        {{
          author.mfn + author.fields[5]
            ? author.fields[5].subFields[0]
              ? author.fields[5].subFields[0].value
              : author.fields[5].subFields[0]
            : ''
        }}
      </li>
    </ol>
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
