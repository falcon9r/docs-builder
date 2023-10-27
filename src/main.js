import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";

import "./assets/scss/editor/tailwind.scss";
import "./assets/scss/base.scss";
import VueMdijs from "@/lib/vue-mdijs";

const app = createApp(App);

app.use(router);
app.use(VueMdijs);

app.mount('#app')
