import { createRouter, createWebHashHistory } from "vue-router";
// importamos los componentes que usaremos
import HomeView from "@/views/HomeView.vue";
import JobResults from "@/views/JobResultsView.vue";

const routes = [
  // Declaramos la rutas que usaremos y colocamos los componentes que usaremis para cada ruta
  {
    path: "/", //Sera la ruta en la que se mostrara
    name: "Home", // nombre clave para la ruta, que podremos usar para redirigir
    component: HomeView, // componente que se renderizara cuando vaya a la ruta
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResults,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/JobResultsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
