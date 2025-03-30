import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePopupStore = defineStore(
  "popupStore",
  () => {
    const message = ref("");
    const show = ref(false);

    const showPopup = (msg) => {
      message.value = msg;
      show.value = true;
    };

    const closePopup = () => {
      message.value = "";
      show.value = false;
    };

    return { message, show, showPopup, closePopup };
  },
);
