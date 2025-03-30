import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMemberStore = defineStore("memberStore", () => {
  // 狀態 (State)
  const user = ref({
    token: "",
    memberName: "",
    memberPhoto: "",
  });

  // 動作 (Actions)
  const login = (userData) => {
    user.value = userData;
  };

  const logout = () => {
    user.value = {};
  };

  return { user, login, logout };
});
