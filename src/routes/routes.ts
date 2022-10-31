import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    // routes 数组
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home",
        component: () =>  import("@/views/Home.vue"),
    },
    {
        path: "/ip",
        name: "ip",
        component: () => import("../components/IP.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
