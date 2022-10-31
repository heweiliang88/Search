import { createApp } from "vue";
import App from "./App.vue";

import router from "./routes/routes";

import { createPinia } from 'pinia';

import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';

import "./style/index.scss";

const app = createApp(App);

app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.mount("#app")
