<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="authors"
      :loading="loading"
      :search="search"
      :group-by.sync="groupBy"
      ref="table"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
        <h2 class="text-h6 mb-2">Групування:</h2>
        <v-chip-group v-model="groupBy">
          <v-chip filter value="workPlace">Місце роботи</v-chip>
        </v-chip-group>
      </template>

      <!--<template v-slot:group.header="props">
        {{ props }}
      </template>-->

      <template v-slot:item.id="{ item }">
        <v-chip :to="'/authors/' + item.id"> View </v-chip>
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
      search: '',
      groupBy: [],
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
