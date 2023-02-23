import { createApp } from "vue";
// importamos las librerias de fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// importamos el icono que queremos agregar
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "./router";
import { createPinia } from "pinia";

library.add(faSearch);
// De esta manera colocamos un componenente global
//Primero va la etiqueta , y luego el componente real que va a renderizar
createApp(App)
  .use(createPinia())
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
