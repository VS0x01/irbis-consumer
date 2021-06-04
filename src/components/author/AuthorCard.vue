<template>
  <v-card :loading="!author">
    <v-container v-if="!author">
      <v-row>
        <v-col>
          <v-skeleton-loader type="card-heading, text" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-skeleton-loader type="card-heading" />
        </v-col>
        <v-col class="flex-grow-0" v-for="n in 4" :key="n">
          <v-skeleton-loader type="chip" />
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
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
