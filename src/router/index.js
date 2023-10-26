import DashboardView from "@/views/docs/DashboardView.vue";
import {createRouter, createWebHistory} from "vue-router";
import MarkedEditorTestView from "@/views/docs/editors/marked/MarkedEditorTestView.vue";

const routes = [
    {
        path: '/',
        name: 'default',
        component: DashboardView
    },
    {
        path: '/docs/test',
        name: 'docs.editor.test',
        component: MarkedEditorTestView
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
