<template>
  <v-card :loading="!author">
    <v-skeleton-loader type="card-heading" v-if="!author" />
    <v-container v-if="!author">
      <v-row v-for="n in 4" :key="n" align="center" justify="start">
        <v-col>
          <v-skeleton-loader type="card-heading" width="100%" />
        </v-col>
        <v-col>
          <v-skeleton-loader type="text" />
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-col class="flex-grow-0" v-for="n in 4" :key="n">
          <v-skeleton-loader type="chip" />
        </v-col>
      </v-row>
    </v-container>

    <v-card-title v-if="author">
      {{ author.lastName + ' ' + author.firstName }}
    </v-card-title>
    <v-container v-if="author">
      <v-row align="center" v-if="author.academicStatus">
        <v-col>
          <v-card-title>Вчене звання:</v-card-title>
        </v-col>
        <v-col>
          <v-card-text>{{ author.academicStatus }}</v-card-text>
        </v-col>
      </v-row>

      <v-row class="d-flex" align="center" v-if="author.degree">
        <v-col>
          <v-card-title>Науковий ступінь:</v-card-title>
        </v-col>
        <v-col>
          <v-card-text>{{ author.degree }}</v-card-text>
        </v-col>
      </v-row>

      <v-row class="d-flex" align="center" v-if="author.workPlace">
        <v-col>
          <v-card-title>Місце роботи:</v-card-title>
        </v-col>
        <v-col>
          <v-card-text>{{ author.workPlace }}</v-card-text>
        </v-col>
      </v-row>

      <v-row class="d-flex" v-if="Object.keys(author.links).includes('KNEU')">
        <v-col>
          <v-card-title>
            Сторінка науковця на сайті університету:
          </v-card-title>
        </v-col>
        <v-col>
          <v-card-text>{{ author.academicStatus }}</v-card-text>
        </v-col>
      </v-row>

      <v-card-title v-if="Object.keys(author.links).length > 0">
        Посилання:
      </v-card-title>
      <v-card-text>
        <v-chip-group>
          <v-chip link v-for="(v, k) in author.links" :key="k" :href="v">
            {{ k }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'AuthorCard',
  props: ['author']
}
</script>

<style></style>
