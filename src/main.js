// === 建立 App ===
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// === pinia ===
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(pinia);

// === router ===
import router from "./router";
app.use(router);

// === vuetify ===
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css' 

const vuetify = createVuetify({
  components,
  directives,
});
app.use(vuetify);

// === mount ===
app.mount("#app");
