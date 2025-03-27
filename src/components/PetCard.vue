<template>
  <v-card class="ml-3 mr-3 mt-3 mb-3">
    <template #title>
      <h1 class="text-center">123</h1>
    </template>

    <template #text>
      <div class="align-center justify-center d-flex w-100">
        <img src="https://fakeimg.pl/300x300" class="w-75" />
      </div>
    </template>

    <v-card-actions class="align-center justify-between">
      <div class="w-100 ml-10">
        <h3>1</h3>
      </div>

      <div class="w-100">
        <v-btn>
          <v-icon icon="mdi-emoticon-poop" size="x-large" />
        </v-btn>

        <v-btn>
          <v-icon icon="mdi-heart" size="x-large" color="red" />
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup></script>

<style scoped></style>
