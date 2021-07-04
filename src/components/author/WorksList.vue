<template>
  <v-data-table
    :headers="headers"
    :items="works"
    :loading="loading"
    show-expand
    single-expand
  >
    <template v-slot:item.authorName="{ item }">
      <td>
        {{
          item.authorName ||
          item.anotherAuthors
            .reduce((accumulator, author) => {
              return accumulator + ', ' + author.lastName
            }, '')
            .slice(2) ||
          (() => {
            const currentWork = item.content.find(
              (currentRecord) => currentRecord.authorId == authorId
            );
            return currentWork !== undefined ? currentWork.authorName : ''
          })()
        }}
      </td>
    </template>

    <template v-slot:item.title="{ item }">
      <td>
        {{
          item.title ||
          item.content
            .filter((record) => record.authorId == authorId)
            .map((record) => record.title)
            .join('; ')
        }}
      </td>
    </template>

    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">{{ item }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'WorksList',
  props: ['authorId', 'works', 'loading'],
  data: () => {
    return {
      headers: [
        { text: 'Author(s)', value: 'authorName' },
        { text: 'Title', value: 'title' },
        { text: '', value: 'data-table-expand' }
      ]
    }
  }
}
</script>

<style></style>
