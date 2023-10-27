import {createRouter, createWebHistory} from "vue-router";
import Showdown from "@/modules/editor/showdown-editor/Showdown.vue";

const routes = [];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
