<template>
  <v-card :loading="!author">
    <v-skeleton-loader type="article" v-if="!author" />
    <v-card-title v-if="author">
      {{ author.lastName + ' ' + author.firstName }}
    </v-card-title>

    <v-card-subtitle v-if="author">
      {{ author.workPlace }}
    </v-card-subtitle>

    <v-card-title v-if="author"> Посилання: </v-card-title>
    <v-card-text>
      <v-chip-group v-if="author">
        <v-chip link v-for="(v, k) in author.links" :key="k" :href="v">
          {{ k }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AuthorCard',
  props: ['author']
}
</script>

<style></style>
