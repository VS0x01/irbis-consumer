<template>
  <v-card :loading="!author">
    <v-container v-if="!author">
      <v-row>
        <v-col>
          <v-skeleton-loader type="card-heading, text@3" />
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
    <div v-if="author">
      <v-card-title>
        {{ author.lastName + ' ' + author.firstName }}
      </v-card-title>

      <v-card-title v-if="author.academicStatus">Вчене звання:</v-card-title>
      <v-card-text>{{ author.academicStatus }}</v-card-text>

      <v-card-title v-if="author.degree">Науковий ступінь:</v-card-title>
      <v-card-text>{{ author.degree }}</v-card-text>

      <v-card-title>Місце роботи:</v-card-title>
      <v-card-text>{{ author.workPlace }}</v-card-text>

      <v-card-title v-if="!!author.links.length"
        >Сторінка науковця на сайті університету:</v-card-title
      >

      <v-card-title v-if="author.links.length > 0">Посилання:</v-card-title>
      <v-card-text>
        <v-chip-group>
          <v-chip link v-for="(v, k) in author.links" :key="k" :href="v">
            {{ k }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'AuthorCard',
  props: ['author']
}
</script>

<style></style>
