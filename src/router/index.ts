
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../paginas/home/Home.vue";
import Batman from "../paginas/batman/Batman.vue";
import Simpsons from "../paginas/Simpsons/Simpsons.vue";
import Respuesta from "../paginas/Respuesta/Respuesta.vue";

export const router = createRouter ({
    history: createWebHashHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/",
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
            component: Simpsons,
        },
        {
            path: '/indecision',
            name: 'Indecision',
            component: Respuesta
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ],
});  