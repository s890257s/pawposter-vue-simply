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
import { ref, onMounted } from "vue";
import apiRequest from "@/utils/api";

import PetCard from "@/components/PetCard.vue";

const pets = ref([]);

onMounted(() => {
  apiRequest({ method: "GET", url: "/pets" }).then((res) => {
    pets.value = res.data;
  });
});
</script>

<style scoped></style>
