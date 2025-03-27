// === 建立 App ===
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// === pinia ===
import { createPinia } from "pinia";
app.use(createPinia());

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
