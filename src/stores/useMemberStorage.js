import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMemberStorage = defineStore("memberStore", () => {
  // 狀態 (State)
  const user = ref({ token: "" }); // 使用者資料

  // 計算屬性 (Getters)
  const isAuthenticated = computed(() => !!token.value); // 判斷是否已登入

  // 動作 (Actions)
  const login = (userData) => {
    user.value = userData;
  };

  return { user, isAuthenticated, login };
});
