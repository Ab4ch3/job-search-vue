import { createRouter, createWebHashHistory } from "vue-router";
// importamos los componentes que usaremos
// import HomeView from "@/views/HomeView.vue";
// import JobsResults from "@/views/JobResultsView.vue";
// import JobView from "@/views/JobsView.vue";

// Realiza una importancion atravez ES6 , para se usado luego
const HomeView = () => import("@/views/HomeView.vue");
const JobsResults = () => import("@/views/JobResultsView.vue");
const JobView = () => import("@/views/JobsView.vue");

const routes = [
  // Declaramos la rutas que usaremos y colocamos los componentes que usaremis para cada ruta
  {
    path: "/", //Sera la ruta en la que se mostrara
    name: "Home", // nombre clave para la ruta, que podremos usar para redirigir
    component: HomeView, // componente que se renderizara cuando vaya a la ruta
  },
  {
    path: "/jobs/results",
    name: "JobsResults",
    component: JobsResults,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/JobResultsView.vue"),
  },
  {
    path: "/jobs/results/:id", //Asi especificarmos que esta ruta depende de un parametro llamado ID
    name: "JobListinng",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    /* Especifica como se comportara el desplazamiento siempre q haya un cambio en la ruta
    Cade vez que haya un cambio nos enviara hacia la parte de arriba y a la izquierda del 
    sitio
    behavior es como la transicion de como subira al principio
    */
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
