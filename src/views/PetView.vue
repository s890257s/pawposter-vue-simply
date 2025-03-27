<template>
  <div>
    <v-container class="bg-surface-variant mt-10">
      <v-row no-gutters>
        <v-col v-for="p in pets" :key="p.id" cols="12" sm="4">
          <PetCard></PetCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PetCard from "@/components/PetCard.vue";

const pets = ref([
  {
    id: 1,
    name: "MAX",
    age: 3,
    image: "https://fakeimg.pl/200x200/?text=MAX",
    owner: "Alice",
  },
  {
    id: 2,
    name: "LUNA",
    age: 1,
    image: "https://fakeimg.pl/200x200/?text=LUNA",
    owner: "Bob",
  },
  {
    id: 3,
    name: "CHARLIE",
    age: 5,
    image: "https://fakeimg.pl/200x200/?text=CHARLIE",
    owner: "Charlie",
  },
  {
    id: 3,
    name: "CHARLIE",
    age: 5,
    image: "https://fakeimg.pl/200x200/?text=CHARLIE",
    owner: "Charlie",
  },
  {
    id: 3,
    name: "CHARLIE",
    age: 5,
    image: "https://fakeimg.pl/200x200/?text=CHARLIE",
    owner: "Charlie",
  },
]);
</script>

<style scoped></style>
