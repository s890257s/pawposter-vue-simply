<template>
  <v-dialog max-width="500" v-model="show">
    <v-card title="Dialog">
      <v-card-text>
        {{ message }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text="關閉" @click="closePopup"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { usePopupStore } from '@/stores/usePopupStore';
const { message, show, closePopup } = usePopupStore();
</script>

<style scoped></style>
