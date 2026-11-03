
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../paginas/home/Home.vue";
import Batman from "../paginas/batman/Batman.vue";
import Primus from "../paginas/Simpsons/Primus.vue";
import Respuesta from "../paginas/Respuesta/Respuesta.vue";

export const router = createRouter ({
    history: createWebHashHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/Home",
            name: "Home",
            component: Home
        },
        {
            path: "/batman",
            name: "Batman",
            component: Batman
        },
        {
            path: "/simpsons",
            name: "Simpsons",
            component: Primus,
        },
        {
            path: '/indecision',
            name: 'Indecision',
            component: Respuesta
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/Home'
        }
    ],
});  