
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../paginas/home/Home.vue";
import Batman from "../paginas/batman/Batman.vue";
import Primus from "../paginas/Simpsons/Primus.vue";
import Respuesta from "../paginas/Respuesta/Respuesta.vue";
import Circa from "@/paginas/Simpsons/Circa.vue";
import Collectione from "@/paginas/Simpsons/Collectione.vue";
import Character from "@/paginas/Simpsons/Character.vue";
import Layout from "@/paginas/Simpsons/Layout.vue";


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
            children: [
                {
                path: "", //simpsons
                name: "Simpsons",
                component: Primus,
                },
                {
                path: "about",
                component: Layout,
                 children: [
                        {
                            path: "", //simpsons/about
                            name: "simpsons-about",
                            component: Circa
                        }
                    ]
                },
                 {
                path: "gallery",
                component: Layout,
                 children: [
                        {
                            path: "id", //simpsons/gallery/23
                            name: "simpsons-characters",
                            component: Collectione
                        },
                        {
                            path: "id",
                            name: "simpsons-character",
                            component: Character
                        }
                    ]
                }
            ]
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